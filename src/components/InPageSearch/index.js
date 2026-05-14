import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import styles from './styles.module.css';

const client = algoliasearch('ZR9E3OBYZK', '959f69400cf777d4fe4aa03e04d38fd9');

function stripHtml(str) {
  return str ? str.replace(/<[^>]+>/g, '') : '';
}

function getTitle(hit) {
  return stripHtml(
    hit.hierarchy?.lvl3 ||
      hit.hierarchy?.lvl2 ||
      hit.hierarchy?.lvl1 ||
      hit.hierarchy?.lvl0 ||
      'Seção'
  );
}

function getSnippet(hit) {
  const raw =
    hit._snippetResult?.content?.value ||
    hit._highlightResult?.content?.value ||
    hit.content ||
    '';
  return stripHtml(raw).slice(0, 130);
}

function highlightText(text, query) {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  const re = new RegExp(`^${escaped}$`, 'i');
  return parts.map((part, i) =>
    re.test(part) ? (
      <mark key={i} className={styles.highlight}>{part}</mark>
    ) : (
      part
    )
  );
}

export default function InPageSearch() {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const debounceRef = useRef(null);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const currentPath = location.pathname.replace(/\/$/, '');

  const performSearch = useCallback(
    async (q) => {
      if (!q.trim()) {
        setResults([]);
        setIsOpen(false);
        return;
      }
      setIsLoading(true);
      try {
        const response = await client.search({
          requests: [
            {
              indexName: 'DatachampDocs',
              query: q,
              hitsPerPage: 100,
              attributesToSnippet: ['content:20'],
            },
          ],
        });
        const allHits = response.results[0]?.hits || [];

        const filtered = allHits.filter((hit) => {
          if (!hit.url) return false;
          try {
            const hitPath = new URL(hit.url).pathname.replace(/\/$/, '');
            return hitPath === currentPath;
          } catch {
            return hit.url.includes(currentPath);
          }
        });

        setResults(filtered);
        setIsOpen(true);
      } catch (err) {
        console.error('InPageSearch error:', err);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    },
    [currentPath]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => performSearch(value), 300);
  };

  const handleSelect = (hit) => {
    const anchor = hit.url?.split('#')[1];
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = hit.url;
      }
    }
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.inputWrapper}>
        <svg
          className={styles.searchIcon}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8.5 3a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 8.5a6.5 6.5 0 1111.436 4.23l3.857 3.857a.75.75 0 01-1.06 1.06l-3.858-3.857A6.5 6.5 0 012 8.5z"
            fill="currentColor"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          onKeyDown={(e) => e.key === 'Escape' && handleClear()}
          placeholder="Buscar nesta página..."
          className={styles.input}
          aria-label="Buscar nesta página"
          aria-autocomplete="list"
          aria-expanded={isOpen}
        />
        {query && (
          <button
            onClick={handleClear}
            className={styles.clearBtn}
            aria-label="Limpar busca"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && (
        <div className={styles.dropdown} role="listbox">
          {isLoading ? (
            <div className={styles.stateMsg}>
              <span className={styles.spinner} />
              Buscando...
            </div>
          ) : results.length === 0 ? (
            <div className={styles.stateMsg}>
              Nenhum resultado encontrado nesta página.
            </div>
          ) : (
            <ul className={styles.resultsList}>
              {results.map((hit, i) => (
                <li key={i} role="option">
                  <button
                    className={styles.resultItem}
                    onClick={() => handleSelect(hit)}
                  >
                    <span className={styles.resultTitle}>{highlightText(getTitle(hit), query)}</span>
                    {getSnippet(hit) && (
                      <span className={styles.resultSnippet}>
                        {highlightText(getSnippet(hit), query)}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
