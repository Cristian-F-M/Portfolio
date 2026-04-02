export {}

declare global {
	function setLinkActive(): void
	function moveLinkIndicator(a: HTMLAnchorElement): void
	function setHash(hash: string): void
	function showSplashScreen(): Promise<number>
}