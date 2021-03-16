import { DisplayModeProvider } from '../lib/provider/displayMode'
import { OsiDataProvider } from '../lib/provider/osiData'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
	return (
		<DisplayModeProvider>
			<OsiDataProvider>
				<Component {...pageProps} />
			</OsiDataProvider>
		</DisplayModeProvider>
	)
}
