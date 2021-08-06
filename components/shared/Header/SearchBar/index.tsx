import { NextPage } from 'next'
import { MouseEventHandler, useRef, useEffect, useState } from 'react'
const SearchBar: NextPage = () => {
    const mainSearch = useRef<null | HTMLDivElement>(null)
    const inputRef = useRef<null | HTMLInputElement>(null)
    const [searchExpended, setSearchExpended] = useState<boolean>(false)
    useEffect(() => {
        if (mainSearch.current && inputRef.current){
            if (searchExpended){
                mainSearch.current.classList.remove('w-12')
                mainSearch.current.classList.add('w-96')
                inputRef.current.focus()
            }
            else{
                mainSearch.current.classList.remove('w-96')
                mainSearch.current.classList.add('w-12')
                inputRef.current.blur()
            }
        }
    }, [searchExpended])

    useEffect(() => {
        const clickOutside = () => {
            if (searchExpended){
                setSearchExpended(false)
            }
        }
        document.body.addEventListener('click', clickOutside)

        return () => {
            document.body.removeEventListener('click', clickOutside)
        }
    }, [searchExpended])
    
    const expandSearch: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation()
        setSearchExpended(true)

    }
    return (
        <div className="flex flex-nowrap items-center overflow-hidden border-2 relative border-solid border-main rounded-full w-12 h-11 cursor-pointer ml-auto self-center mr-8 transition-all duration-500" onClick={expandSearch} ref={mainSearch}>
            <div className="ml-3">
                <i className="fa fa-search text-main text-xl" aria-hidden="true"/>
            </div>
            <div className="w-auto mr-1">
                <input type="text" className="top-0 h-full w-full left-0 text-main focus:outline-none font-poppins font-semibold pl-3" ref={inputRef}/>
            </div>
        </div>
    
    )
}

export default SearchBar