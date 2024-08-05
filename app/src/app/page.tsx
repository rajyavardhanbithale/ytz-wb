
import Main_menu from './components/Main_menu'
import SearchBar from './components/SearchBar'
import Carousel_comp from './components/Carousel_comp'

export default function Home() {
    return (
        <main className="w-full h-fit antialiased flex flex-col justify-center items-center ">

            <SearchBar/>
            <Main_menu />
            <Carousel_comp/>
        </main>
    )
}
