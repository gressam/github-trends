import { useCallback, useEffect, useState } from "react"
import { useClickOutside } from "react-click-outside-hook";
import { ISelectItem } from "src/interfaces/ISelectItem"
import './InputSelect.scss';
type InputSelectType = {
    items: ISelectItem[];
    handleSelect: Function;
    title: string;
    titleInSelect: string;
    placeholder?: string;
    clearText?: string;
    canSearch?: boolean;
    addClearLabel?: boolean;
    defaultValue?: string;
}

export const InputSelect = (props: InputSelectType): JSX.Element => {
    const [searchValue, setSearchValue] = useState('');
    const [items, setItems] = useState<ISelectItem[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<ISelectItem>();
    const [ref, hasClickedOutside] = useClickOutside()

    const getClearItem = useCallback(() => ({ value: props.clearText || '', label: props.clearText || '' }), [props.clearText])

    useEffect(() => {
        if (props.items?.length) {
            setItems(props.items);
        }
    }, [props.items])

    useEffect(() => {
        if (searchValue) {
            setItems(props.items.filter(item => item.label.indexOf(searchValue) >= 0));
        }
        else {
            setItems(selectedItem && props.addClearLabel ? [getClearItem(), ...props.items] : props.items);
        }
    }, [searchValue, props.items, props.addClearLabel, selectedItem, getClearItem])

    useEffect(() => {
        if (hasClickedOutside) {
            setIsOpen(false);
        }
    }, [hasClickedOutside])

    useEffect(() => {
        if (props.defaultValue) {
            setSelectedItem(items.filter((item: ISelectItem) => item.value === props.defaultValue)[0]);
        }
    }, [props.defaultValue, items])


    const handleInputChange = (event: any) => {
        setSearchValue(event.target.value);
    }

    const handleItemSelect = (item: ISelectItem) => {
        if (item.value === getClearItem().value) {
            setSelectedItem(undefined);
            props.handleSelect(undefined)
            setItems(props.items);
            setSearchValue('');
            return;
        }

        setItems((prevItems: ISelectItem[]): ISelectItem[] => {
            if (prevItems.findIndex((item: ISelectItem): boolean => (item.value === props.clearText)) >= 0 || !props.addClearLabel) {
                return prevItems
            } else {
                return [getClearItem(), ...prevItems]
            }
        })
        props.handleSelect(item)
        setSelectedItem(item);
    }

    return (
        <div ref={ref} className='input-select'>
            <div className='input-select-title' onClick={() => setIsOpen(!isOpen)}>{props.title} <span>{selectedItem?.label || 'Any'}</span></div>
            {isOpen && <div className='input-select-list'>
                <div className='title'>{props.titleInSelect}</div>
                {props.canSearch && <div className='search'>
                    <div className='search-container'>
                        <input placeholder={props.placeholder} value={searchValue} onChange={handleInputChange} />
                    </div>
                </div>}
                <div className={`select-items-list`}>
                    {items.map((item: ISelectItem) =>
                        <div
                            key={item.value}
                            onClick={() => handleItemSelect(item)}
                            className={`select-item  ${selectedItem === item ? 'select-item-selected' : ''}`}>
                            {item.value === props.clearText &&
                                <svg height="16" viewBox="0 0 16 16" width="16">
                                    <path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                                </svg>}

                            {item.value === selectedItem?.value &&
                                <svg height="16" viewBox="0 0 16 16" width="16">
                                    <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>

                                </svg>}

                            {item.label}
                        </div>)}
                </div>
            </div>}
        </div>)
}