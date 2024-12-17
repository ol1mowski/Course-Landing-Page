type RememberMeSectionProps = {
  rememberMe: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onForgotPassword: () => void;
};

const RememberMeSection = ({ rememberMe, onChange, onForgotPassword }: RememberMeSectionProps) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <input
        id="rememberMe"
        name="rememberMe"
        type="checkbox"
        checked={rememberMe}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
      />
      <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
        Zapamiętaj mnie
      </label>
    </div>

    <button
      type="button"
      onClick={onForgotPassword}
      className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
    >
      Nie pamiętam hasła
    </button>
  </div>
);

export default RememberMeSection; 