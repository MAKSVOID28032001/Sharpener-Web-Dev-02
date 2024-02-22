const formData = (event) => {
    event.preventDefault();
    let chocname = document.getElementById("CHOCNAME").value;
    let chocabt = document.getElementById("CHOCABT").value;
    let chocprice = document.getElementById("CHOCPRICE").value;
    let choccount = document.getElementById("CHOCCOUNT").value;

    let EXPOBJ = { chocid: Math.random(), chocname, chocabt, chocprice, choccount };

    LISTADD(EXPOBJ);
    document.getElementById("CHOCNAME").value = '';
    document.getElementById("CHOCABT").value = '';
    document.getElementById("CHOCPRICE").value = '';
    document.getElementById("CHOCCOUNT").value = '';
}
const LISTADD = async (OBJ) => {
    try {
        const response = await axios.post(`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate.json`, OBJ, {
            headers : {'Content-Type' : 'application/json'},
        });
        const key = response.data.name;
        const {data} = await axios.get (`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`);

        let MainList = document.getElementById("MainList");
        let List = document.createElement('div');
        List.classList.add('ListHead');
        let BtnBox = document.createElement("div");
        BtnBox.classList.add('BtnBox');

        let div1 = document.createElement('div');
        div1.classList.add('Data');
        div1.textContent = data.chocname;

        let div2 = document.createElement('div');
        div2.classList.add('Data');
        div2.textContent = data.chocabt;

        let div3 = document.createElement('div');
        div3.classList.add('Data');
        div3.textContent = data.chocprice;

        let div4 = document.createElement('div');
        div4.classList.add('Data');
        div4.textContent = data.choccount;

        let ONE = document.createElement("button");
        ONE.textContent = "1";
        ONE.classList.add('BTN1');
        ONE.addEventListener('click', async () => {
            try {
                const UpdatedResponse = await axios.get (`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`);
                const CurrentQuantity = UpdatedResponse.data.choccount;
                await axios.patch(`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`,{
                    choccount: parseInt(CurrentQuantity - 1)
                })
                div4.textContent = parseInt(CurrentQuantity - 1);
            } catch (error) {
                console.log(`Error : ${error}`);
            }
        });

        let TWO = document.createElement("button");
        TWO.textContent = "2";
        TWO.classList.add('BTN1');
        TWO.addEventListener('click', async () => {
            try {
                const UpdatedResponse = await axios.get (`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`);
                const CurrentQuantity = UpdatedResponse.data.choccount;
                await axios.patch(`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`,{
                    choccount: parseInt(CurrentQuantity - 2)
                })
                div4.textContent = parseInt(CurrentQuantity - 2);
            } catch (error) {
                console.log(`Error : ${error}`);
            }
        });

        let THREE = document.createElement("button");
        THREE.textContent = "3";
        THREE.classList.add('BTN1');
        THREE.addEventListener('click', async () => {
            try {
                const UpdatedResponse = await axios.get (`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`);
                const CurrentQuantity = UpdatedResponse.data.choccount;
                await axios.patch(`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`,{
                    choccount: parseInt(CurrentQuantity - 3)
                })
                div4.textContent = parseInt(CurrentQuantity - 3);
            } catch (error) {
                console.log(`Error : ${error}`);
            }
        });

        List.appendChild(div1);
        List.appendChild(div2);
        List.appendChild(div3);
        List.appendChild(div4);
        List.appendChild(BtnBox);
        BtnBox.appendChild(ONE);
        BtnBox.appendChild(TWO);
        BtnBox.appendChild(THREE);

        MainList.appendChild(List);
    } catch (error) {
        console.log(`Error  : ${error}`);
    }
}
//After Refresh Data & Operatiions
document.addEventListener('DOMContentLoaded', async () => {
    try{
        const response = await axios.get('https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate.json');
        const data = response.data;

        let MainList = document.getElementById("MainList");
        for (let key in data) {
            let List = document.createElement('div');
            List.classList.add('ListHead');
            let BtnBox = document.createElement("div");
            BtnBox.classList.add('BtnBox');

            let div1 = document.createElement('div');
            div1.classList.add('Data');
            div1.textContent = data[key].chocname;

            let div2 = document.createElement('div');
            div2.classList.add('Data');
            div2.textContent = data[key].chocabt;

            let div3 = document.createElement('div');
            div3.classList.add('Data');
            div3.textContent = data[key].chocprice;

            let div4 = document.createElement('div');
            div4.classList.add('Data');
            div4.textContent = data[key].choccount;

            let ONE = document.createElement("button");
            ONE.textContent = "1";
            ONE.classList.add('BTN1');
            ONE.addEventListener('click', async () => {
                try {
                    const UpdatedResponse = await axios.get (`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`);
                    const CurrentQuantity = UpdatedResponse.data.choccount;
                    await axios.patch(`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`,{
                        choccount: parseInt(CurrentQuantity - 1)
                    })
                    div4.textContent = parseInt(CurrentQuantity - 1);
                } catch (error) {
                    console.log(`Error : ${error}`);
                }
            });

            let TWO = document.createElement("button");
            TWO.textContent = "2";
            TWO.classList.add('BTN1');
            TWO.addEventListener('click', async () => {
                try {
                    const UpdatedResponse = await axios.get (`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`);
                    const CurrentQuantity = UpdatedResponse.data.choccount;
                    await axios.patch(`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`,{
                        choccount: parseInt(CurrentQuantity - 2)
                    })
                    div4.textContent = parseInt(CurrentQuantity - 2);
                } catch (error) {
                    console.log(`Error : ${error}`);
                }
            });

            let THREE = document.createElement("button");
            THREE.textContent = "3";
            THREE.classList.add('BTN1');
            THREE.addEventListener('click', async () => {
                try {
                    const UpdatedResponse = await axios.get (`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`);
                    const CurrentQuantity = UpdatedResponse.data.choccount;
                    await axios.patch(`https://choclateshop-ad2e7-default-rtdb.firebaseio.com/choclate/${key}.json`,{
                        choccount: parseInt(CurrentQuantity - 3)
                    })
                    div4.textContent = parseInt(CurrentQuantity - 3);
                } catch (error) {
                    console.log(`Error : ${error}`);
                }
            });

            List.appendChild(div1);
            List.appendChild(div2);
            List.appendChild(div3);
            List.appendChild(div4);
            List.appendChild(BtnBox);
            BtnBox.appendChild(ONE);
            BtnBox.appendChild(TWO);
            BtnBox.appendChild(THREE);

            MainList.appendChild(List);
        }
    } catch (error) {
        console.log(`Error : ${error}`);
    }
});