import s from './DecksList.module.css'
import {store, useAppDispatch, useAppSelector} from '../../../app/store.ts';
import {useEffect} from 'react';
import {getDecksTC} from '../decks-thunks.ts';
import {DeckItem} from './DeckItem/DeckItem.tsx';
import {useGetDecks} from './DeckItem/useGetDecks.ts';

export const DecksList = () => {


  const { decks } = useGetDecks()

  return <ul className={s.list}>
    {decks.map(dc => <DeckItem key={dc.id} deck={dc}/>)}
  </ul>
}
