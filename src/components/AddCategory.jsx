import { useState } from "react";
import { motion } from "framer-motion";
import { Search, X, Sparkles } from "lucide-react";
import PropTypes from 'prop-types';

export const Addcategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;
    
    setIsLoading(true);
    
    // Simulate API delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    onNewCategory(inputValue.trim());
    setInputValue('');
    setIsLoading(false);
  };

  const clearInput = () => {
    setInputValue('');
    setIsFocused(false);
  };

  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focused: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    unfocused: {
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className="search-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.form 
        onSubmit={onSubmit} 
        className="search-form"
        variants={inputVariants}
        animate={isFocused ? "focused" : "unfocused"}
        aria-label="Search GIFs"
      >
        <div className="search-input-wrapper">
          <Search 
            size={20} 
            className={`search-icon ${isFocused ? 'search-icon-focused' : ''}`}
          />
          <input
            type="text"
            className="search-input"
            placeholder="Search for amazing GIFs..."
            value={inputValue}
            onChange={onInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={isLoading}
            aria-label="Search input"
          />
          {inputValue && (
            <motion.button
              type="button"
              className="clear-button"
              onClick={clearInput}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
              aria-label="Clear search"
            >
              <X size={16} />
            </motion.button>
          )}
        </div>
        
        <motion.button
          type="submit"
          className="search-button"
          disabled={inputValue.trim().length <= 1 || isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          whileDisabled={{ scale: 1, opacity: 0.6 }}
        >
          {isLoading ? (
            <motion.div
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            <>
              <Sparkles size={18} className="mr-2" />
              Search
            </>
          )}
        </motion.button>
      </motion.form>
      
      {/* Search Suggestions */}
      {isFocused && inputValue.length === 0 && (
        <motion.div
          className="search-suggestions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="suggestion-item">
            <Search size={16} />
            <span>Try: "cats", "funny", "reactions"</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

Addcategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};