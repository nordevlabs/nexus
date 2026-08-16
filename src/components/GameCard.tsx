import type { Game } from '../types/Game'

type GameCardProps = Pick<Game, 'title' | 'genre' | 'price' | 'image'>

function GameCard(props: GameCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(props.price)

  return (
    <article className="game-card">
      <img
        className="game-card__image"
        src={props.image}
        alt={props.title}
      />

      <div className="game-card__content">
        <h3 className="game-card__title">{props.title}</h3>

        <div className="game-card__details">
          <span className="game-card__genre">{props.genre}</span>
          <span className="game-card__price">{formattedPrice}</span>
        </div>
      </div>
    </article>
  )
}

export default GameCard