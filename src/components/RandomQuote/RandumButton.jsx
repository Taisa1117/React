import { useState } from "react";
import RandomAuthor from "./RandumAuthor";
import TextQuote from "./TextQuote";

const RandomQuote = () => {
    const quotes = ['I am Taichi', 'I am mimizu', 'I am washi'];
    const authors = ['taichi', 'mimizu', 'washi'];
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const changeQuote = () => {
        const r = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[r]);
        setAuthor(authors[r]);
    }
    return(
        <div>
            <TextQuote value={quote} />
            <RandomAuthor value={author}/>
            <button>
                <a href="twitter.com/intent/tweet" target={'_blank'}>
                    <i className='fa fa-twitter'></i></a>
            </button>
            <button
                onClick={changeQuote}
            >
                New quote</button>
        </div>
    );
}
export default RandomQuote;