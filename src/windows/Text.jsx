import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile?.data

  if (!data) return null

  const { name, image, subtitle, description } = data

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2 className="truncate">{name}</h2>
      </div>

      <div className="bg-white p-6 h-full overflow-y-auto">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full rounded-lg mb-4"
          />
        )}

        {subtitle && (
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            {subtitle}
          </h3>
        )}

        <div className="space-y-3">
          {description?.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-sm leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile')

export default TextWindow