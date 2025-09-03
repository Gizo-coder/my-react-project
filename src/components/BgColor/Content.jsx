

const Content = ({rgbColor}) => {
    return (
        <div style={{
            backgroundColor : `rgb(${rgbColor.r},${rgbColor.g},${rgbColor.b})`
        }}>
            BG DEĞİŞTİRME ALANI
        </div>
    )
}
export default Content;