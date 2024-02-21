import { IInputProps } from '../props/IInputProps.interface';

export interface IAutocompleteProps extends IInputProps {}

export const Autocomplete: React.FunctionComponent<IAutocompleteProps> = (props) => {
  const { bindInput, bindOptions, bindOption, isBusy, suggestions, selectedIndex } = useAutocomplete({
    onChange: (value) => console.log(value),
    source: (search) => Options.filter((option) => new RegExp(`^${search}`, 'i').test(option.label))
  });

  return (
    <div className="p-2 border">
      <div className="flex items-center w-full">
        <HiSearch />
        <input placeholder="Search" className="flex-grow px-1 outline-none" {...bindInput} />
        {isBusy && <div className="w-4 h-4 border-2 border-dashed rounded-full border-slate-500 animate-spin"></div>}
      </div>
      <ul {...bindOptions} className="w-[300px] scroll-smooth absolute max-h-[260px] overflow-x-hidden overflow-y-auto">
        {suggestions.map((_, index) => (
          <li className={`flex items-center h-[40px] p-1 hover:bg-slate-300 ` + (selectedIndex === index && 'bg-slate-300')} key={index} {...bindOption}>
            <div className="flex items-center space-x-1">
              <HiUser />
              <div>{suggestions[index].label}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
