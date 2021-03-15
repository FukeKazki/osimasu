import {DisplayModeProvider} from '../lib/provider/displayMode'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
	return (
		<DisplayModeProvider>
			<Component {...pageProps} />
		</DisplayModeProvider>
	)
}
