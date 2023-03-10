function listenerOptionYes(){
    const opt = document.getElementById("opt1")

    if (opt.value == "value1"){
        const later = document.getElementById("later")

        later.innerHTML = `

        <label>Cuarto diámetro</label>
        <input id="input7" type="text">

        <label>Cuarto Z</label>
        <input id="input8" type="text">

        <label>Quinto Diámetro</label>
        <input id="input9" type="text">

        <label>Quinto Z</label>
        <input id="input10" type="text">

        <label>Radio del Filo</label>
        <input id="input11" type="text">

        <label>Profundidad del Cuello</label>
        <input id="input12" type="text">
        
        `
    }
    
    if (opt.value == "value2") {
        const later = document.getElementById("later")

        later.innerHTML = `

        <label>Quinto Diámetro</label>
        <input id="input9" type="text">

        <label>Quinto Z</label>
        <input id="input10" type="text">

        <label>Radio del Filo</label>
        <input id="input11" type="text">

        <label>Profundidad del Cuello</label>
        <input id="input12" type="text">
        `
    }

    if (opt.value == "value0") {
        const later = document.getElementById("later")
        later.innerHTML = ``

    }

}


function generar(){
    const opt = document.getElementById("opt1").value

    if (opt == "value1"){
        const i1 = document.getElementById("input1").value
        const i2 = document.getElementById("input2").value
        const i3 = document.getElementById("input3").value
        const i4 = document.getElementById("input4").value
        const i5 = document.getElementById("input5").value
        const i6 = document.getElementById("input6").value
        const i7 = document.getElementById("input7").value
        const i8 = document.getElementById("input8").value
        const i9 = document.getElementById("input9").value
        const i10 = document.getElementById("input10").value
        const i11 = document.getElementById("input11").value
        const i12 = document.getElementById("input12").value
        const i13 = Number(i9) + Number(2)

        const text = document.getElementById("text")
        const programa = `
        <h1>Programa Generado</h1>
        <label>N10 T1212</label>
        <label>N20 G97 S1000 M4</label>
        <label>N30 G0 X18 Z30</label>
        <label>N40 G0 Z1.6</label>
        <label>N50 G94 X-1.6 Z-0.05</label>
        <label>N60 G0 X25 Z25</label>
        <label>N70 G0 G42 X-1.6 Z10</label>
        <label>N80 G1 Z1.5 F9</label>
        <label>N90 G1 Z0 F0.1</label>
        <label>N100 G1 X ${i1}</label>
        <label>N110 G3 X ${i2} Z ${i3} R ${i4}</label>
        <label>N120 G1 X ${i5} Z ${i6}</label>
        <label>N130 G1 X ${i7} Z ${i8}</label>
        <label>N140 G2 X ${i9} Z ${i10} R ${i11}</label>
        <label>N150 G1 Z ${i12}</label>
        <label>N160 G1 X ${i13}</label>
        <label>N170 G0 G40 X200 Z200</label>
        <label>N180 T1010</label>
        <label>N190 G97 S1200 M4</label>
        <label>N200 G70 P30 Q150</label>
        <label>N210 G0 G40 X200 Z200</label>
        <h1>Fin del Programa</h1>
        `
        
        text.innerHTML = programa



    }

    if (opt == "value2"){

        const i1 = document.getElementById("input1").value
        const i2 = document.getElementById("input2").value
        const i3 = document.getElementById("input3").value
        const i4 = document.getElementById("input4").value
        const i5 = document.getElementById("input5").value
        const i6 = document.getElementById("input6").value
        const i9 = document.getElementById("input9").value
        const i10 = document.getElementById("input10").value
        const i11 = document.getElementById("input11").value
        const i12 = document.getElementById("input12").value
        const i13 = Number(i9) + Number(2)

        const text = document.getElementById("text")
        const programa = `
        <h1>Programa Generado</h1>
        <label>N10 T1212</label>
        <label>N20 G97 S1000 M4</label>
        <label>N30 G0 X18 Z30</label>
        <label>N40 G0 Z1.6</label>
        <label>N50 G94 X-1.6 Z-0.05</label>
        <label>N60 G0 X25 Z25</label>
        <label>N70 G0 G42 X-1.6 Z10</label>
        <label>N80 G1 Z1.5 F9</label>
        <label>N90 G1 Z0 F0.1</label>
        <label>N100 G1 X ${i1}</label>
        <label>N110 G3 X ${i2} Z ${i3} R ${i4}</label>
        <label>N120 G1 X ${i5} Z ${i6}</label>
        <label>N140 G2 X ${i9} Z ${i10} R ${i11}</label>
        <label>N150 G1 Z ${i12}</label>
        <label>N160 G1 X ${i13}</label>
        <label>N170 G0 G40 X200 Z200</label>
        <label>N180 T1010</label>
        <label>N190 G97 S1200 M4</label>
        <label>N200 G70 P30 Q150</label>
        <label>N210 G0 G40 X200 Z200</label>
        <h1>Fin del Programa</h1>
        `

        text.innerHTML = programa

    }
}