import React from 'react';

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  {
    rows?: number;
    className?: string;
    errorMessage?: string;
    label?: string;
    readOnly?: boolean;
    placeholder?:string;
  }
>(({
  rows, className, errorMessage, label, placeholder, readOnly, ...otherProps
}, ref) => (
  <div className={`w-full ${className}`}>
    {label && <p className={`font-medium text-gray-500 ${errorMessage ? 'text-red-500' : ''}`}>{label}</p>}
    <textarea
      {...otherProps}
      ref={ref}
      rows={rows}
      readOnly={readOnly}
      placeholder={placeholder}
      className={`w-full bg-gray-500/20 placeholder:text-opacity/40 placeholder:italic rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent py-2 px-3 ${className} ${errorMessage ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
    />
    {errorMessage && <p className="text-xs font-medium text-red-500">{errorMessage}</p>}
  </div>
));

TextArea.defaultProps = {
  rows: 3,
  className: '',
  errorMessage: '',
  label: '',
  readOnly: false,
  placeholder: '',
};

export default TextArea;
