'use client'
import Link from "next/link";
import {X} from 'lucide-react';

const SearchFormReset = () => {
  const reset = () => {
    const form = document.getElementById('search-form') as HTMLFormElement;
    if(form) form.reset();
  }
  return (
    <button type="reset" className="search-btn text-white" onClick={reset}>
      <Link href="/" className="search-btn text-white">X</Link>
      
    </button>
  );
};

export default SearchFormReset;