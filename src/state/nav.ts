import { create } from 'zustand'

interface NavState {
	active: string | null
	setActive: (hash: string) => void
}

const useNav = create<NavState>()((set) => ({
	active: null,
	setActive: (hasg) => {
		set({ active: hasg })
	}
}))

export default useNav