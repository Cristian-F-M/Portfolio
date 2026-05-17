import { useTheme } from '@/state/theme'
import { useMemo } from 'react'
import * as THEMES from './themes'
import type { MapProps } from '@vis.gl/react-maplibre'

export function useMapStyle() {
	const { theme } = useTheme()
	// biome-ignore lint/performance/noDynamicNamespaceImportAccess: ---
	const themeData = useMemo(() => THEMES[theme as keyof typeof THEMES], [theme])

	const mapStyle = useMemo<MapProps['mapStyle']>(() => {
		return {
			version: 8,

			sources: {
				osm: {
					type: 'raster',
					tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
					tileSize: 256,
					attribution: '&copy; OpenStreetMap Contributors'
				}
			},

			layers: [
				{
					id: 'background',
					type: 'background',
					paint: {
						'background-color': themeData.background
					}
				},
				{
					id: 'osm-layer',
					type: 'raster',
					source: 'osm',

					paint: {
						'raster-opacity': 0.5,
						'raster-saturation': -1,
						'raster-contrast': 0.2,
						'raster-brightness-max': 0.4
					}
				}
			]
		}
	}, [themeData])

	return { mapStyle }
}