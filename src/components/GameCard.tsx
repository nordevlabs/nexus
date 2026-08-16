import type { Game } from '../types/Game'

type GameCardProps = Pick<Game, 'title' | 'genre' | 'price'>

function GameCard(props: GameCardProps) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.genre}</p>
      <p>{props.price}</p>
    </article>
  )
}

export default GameCard