export default function MotoristasSlider({initial_value, onValueChange }) {
    const min = 1;
    const max = 31;
    const sensitivity = 1000;
    {/*Value 212 is computed based on the mapping of [1:sensitivity] -> [1:31]*/}
    let proportional_start = (initial_value - 1) * sensitivity / max + 1;

    return (
        <>
            <input min={min} max={sensitivity} type="range" defaultValue={proportional_start} onChange={e => {
                let num_motoristas = Math.min(Math.floor(parseInt(e.target.value) * max / sensitivity + 1),max)
                onValueChange(num_motoristas)
            }} name="num_motoristas" className="motoristas_slider" />
            <div className="labels">
                <div><strong>1</strong> motorista</div>
                <div><strong>+30</strong> motoristas</div>
            </div>

        </>
    )

}