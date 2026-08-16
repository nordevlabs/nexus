import Header from './components/Header'
import Hero from './components/Hero'
import type { Game } from './types/Game'
import GameGrid from './components/GameGrid'
import './App.css'
import cyberpunkCover from './assets/games/cyberpunk-2077.jpg'
import baldursGateCover from './assets/games/baldurs-gate-3.jpg'
import helldiversCover from './assets/games/helldivers-2.jpg'

const games: Game[] = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    price: 59.99,
    image: cyberpunkCover,
  },
  {
    id: 2,
    title: "Baldur's Gate 3",
    genre: 'RPG',
    price: 69.99,
    image: baldursGateCover,
  },
  {
    id: 3,
    title: 'Helldivers 2',
    genre: 'Action',
    price: 39.99,
    image: helldiversCover,
  },
]

function App() {
    return (
        <>
            <Header />

            <main>
              <Hero />
              <GameGrid games={games} />
            </main>
        </>
    )
}

export default App