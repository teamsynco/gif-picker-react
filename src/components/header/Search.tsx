import React, { useContext } from 'react';
import PickerContext from '../../context/PickerContext';
import SettingsContext from '../../context/SettingsContext';
import ClearButton from './ClearButton';
import './Search.css';
import PoweredByKlipy from '../header/svg/PoweredByKlipy.svg';

function Search(): JSX.Element {
	const [pickerContext, setPickerContext] = useContext(PickerContext);
	const settings = useContext(SettingsContext);

	function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const contextCopy = Object.assign({}, pickerContext);
		contextCopy.searchTerm = event.target.value;
		setPickerContext(contextCopy);
	}

	function onClear(): void {
		const contextCopy = Object.assign({}, pickerContext);
		contextCopy.searchTerm = '';
		setPickerContext(contextCopy);
	}

	return (
		<div>
			<div className="gpr-search-container">
				<input
					autoFocus={settings.autoFocusSearch}
					aria-label={'Search KLIPY'}
					placeholder={'Search KLIPY'}
					className="gpr-search"
					data-testid="gpr-search-input"
					type="text"
					dir="auto"
					maxLength={500}
					value={pickerContext.searchTerm}
					onChange={onChange}
				/>
				<div className="gpr-icn-search" />
				{pickerContext.searchTerm.length > 0 && <ClearButton onClick={onClear} />}
			</div>
			<div className="gpr-powered-by">
				<img
					src="/components/icons/klipy-watermark.png"
					alt="Powered by Klipy"
				/>
			</div>
		</div>
	);
}

export default Search;
