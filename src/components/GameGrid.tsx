import type { Game } from '../types/Game'
import GameCard from './GameCard'

type GameGridProps = {
  games: Game[]
}

function GameGrid(props: GameGridProps) {
  return (
<section>
  <h2>Featured games</h2>

  <div className="game-grid">
    {props.games.map((game) => (
      <GameCard
        key={game.id}
        title={game.title}
        genre={game.genre}
        price={game.price}
        image={game.image}
      />
    ))}
  </div>
</section>
  )
}

export default GameGrid