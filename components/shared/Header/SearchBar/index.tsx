import { NextPage } from 'next'

const SearchBar: NextPage = () => {
    return (
        <div className="flex items-center border-2 border-solid border-main rounded-full w-11 h-11 justify-center ml-auto self-center mr-8">
            <div className="">
                <i className="fa fa-search text-main text-xl" aria-hidden="true"/>
            </div>
        </div>
    
    )
}

export default SearchBar