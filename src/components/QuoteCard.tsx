import React, { useState } from 'react';
import { Quote } from '../types';
import { ChevronDown, Calendar, Tag } from 'lucide-react';

interface QuoteCardProps {
  quote: Quote;
  isSelected: boolean;
  onClick: () => void;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, isSelected, onClick }) => {
  const [expanded, setExpanded] = useState(isSelected);

  const handleClick = () => {
    setExpanded(!expanded);
    onClick();
  };

  // Function to convert markdown-style bold to HTML
  const formatContent = (text: string) => {
    return text.split('\n').map((paragraph, index) => {
      // Replace **text** with <strong>text</strong>
      const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return (
        <p 
          key={index} 
          className="mb-4 last:mb-0"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      );
    });
  };

  return (
    <div 
      className={`bg-slate-800/70 rounded-xl border border-slate-700 overflow-hidden transition-all duration-300
        ${expanded ? 'shadow-lg shadow-cyan-900/10' : 'hover:shadow-md'}
      `}
    >
      <div 
        className="p-6 cursor-pointer flex flex-col"
        onClick={handleClick}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-mono text-cyan-50">{quote.title}</h3>
          <button 
            className={`p-2 rounded-full bg-slate-700/50 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
              onClick();
            }}
          >
            <ChevronDown className="h-4 w-4 text-cyan-400" />
          </button>
        </div>
        
        <div className="flex items-center text-sm text-slate-400 mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{quote.date}</span>
          </div>
          <div className="flex items-center">
            <Tag className="h-4 w-4 mr-1" />
            <span>{quote.tags.join(', ')}</span>
          </div>
        </div>
        
        <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[2000px] opacity-100' : 'max-h-32 opacity-80'}`}>
          <div className="text-slate-300 leading-relaxed">
            {formatContent(quote.content)}
          </div>
          
          {expanded && (
            <div className="mt-6 pt-4 border-t border-slate-700/50 flex justify-between items-center">
              <div className="text-sm text-slate-400">
                - {quote.author}
              </div>
              {quote.shareEnabled && (
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 transition-colors">
                    <svg className="h-4 w-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 transition-colors">
                    <svg className="h-4 w-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 transition-colors">
                    <svg className="h-4 w-4 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        
        {!expanded && (
          <button 
            className="mt-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors self-start"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(true);
              onClick();
            }}
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default QuoteCard;