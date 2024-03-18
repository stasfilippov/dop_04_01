import axios from 'axios'
export const instance = axios.create({
	baseURL: 'https://api.flashcards.andrii.es',
	headers: {
		'x-auth-skip': true,
	},
})

export const decksApi = {
	getDecks() {
		return instance.get<getResponseType>('/v2/decks')
	},
	createDeck (params: createDeckParams) {
		return instance.post<DeckType>('/v1/decks', params)
	}
}

//types
export type createDeckParams = {
	name: string
}

type AuthorType = {
	id: string
	name: string
}

export type DeckType = {
	author: AuthorType
	id: string
	userId: string
	name: string
	isPrivate: boolean
	cover: string
	created: Date
	updated: Date
	cardsCount: number

}

type PaginationType = {
	currentPage: number
	itemsPerPage: number
	totalPages: number
	totalItems: number
}

type getResponseType = {
	items: DeckType[],
	pagination: PaginationType
}

