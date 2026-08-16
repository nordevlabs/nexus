import Header from './components/Header'
import Hero from './components/Hero'
import GameCard from './components/GameCard'
import type { Game } from './types/Game'

const games: Game[] = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    genre: 'RPG',
    price: 59.99,
  },
  {
    id: 2,
    title: "Baldur's Gate 3",
    genre: 'RPG',
    price: 69.99,
  },
  {
    id: 3,
    title: 'Helldivers 2',
    genre: 'Action',
    price: 39.99,
  },
]

function App() {
    return (
        <>
            <Header />

            <main>
              <Hero />
            {games.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                genre={game.genre}
               price={game.price}
             />
            ))}
            </main>
        </>
    )
}

export default App