const questions = {
    "TrueFalse": [
        {
            "question": "冷鏈物流泛指冷藏冷凍類食品在生產、貯藏運輸、銷售，到消費前的各個環節中始終處於規定的低溫環境下，以保證食品品質，減少食品損耗的一項系統工程。",
            "answer": true
        },
        {
            "question": "青花菜可以用冰和水進行預冷，且具有快速帶走田間熱的效果",
            "answer": true
        },
        {
            "question": "北部葉菜有別於南部的真空預冷，多採以水沖淋或浸泡進行預冷，因此由桃園區農業改良場協助進行冷鏈技術研究，改善北部地區農場冷水預冷技術與採後處理流程以降低損耗率。",
            "answer": true
        },
        {
            "question": "氣調和氣變技術主要是主動或被動調控蔬果貯藏環境當中的氧氣與二氧化碳濃度",
            "answer": true
        },
    ],
    // 選擇題
    "Selector": [
        {
            "question": "為甚麼蔬果需要冷鏈？",
            "option": [
                "降低蔬果的呼吸率延緩生理代謝",
                "降低呼吸熱產生減緩養分消耗",
                "降低失水避免病原菌侵襲",
                "以上皆是"
            ],
            "answer": "4",
        },
        {
            "question": "農業部為了優化農產品冷鏈技術，推動了什麼政策型計畫?",
            "option": [
                "「農產品冷鏈保鮮產銷價值鏈核心技術優化」",
                "「建構農產品冷鏈物流及品質確保示範體系」"
            ],
            "answer": "1",
        },
        {
            "question": "誰是冷鏈計畫的幕後推手?",
            "option": [
                "畜牧專家輔導團",
                "冷鏈專家輔導團"
            ],
            "answer": "2",
        },
        {
            "question": "業界人士想要增進農產品採後冷鏈保鮮的知識可以怎麼辦?",
            "option": [
                "報名中興大學農推中心主辦的冷鏈人才培育課程",
                "報名作物優質生產知識整合平台"
            ],
            "answer": "1",
        },
        {
            "question": "想要知道更多的採後處理技術知識可以上哪裡找",
            "option": [
                " 作物優質生產知識整合平台",
                "農產品冷鏈知識整合平台"
            ],
            "answer": "2",
        },
        {
            "question": "2022年產季末高雄區農業改良場將外銷鳳梨品質規範結合了哪項技術，降低了輸日鳳梨到貨果實褐化比率？",
            "option": [
                "壓差預熱",
                "壓差預冷"
            ],
            "answer": "2",
        },
        {
            "question": " 哪種技術為臺灣中小型生產單位適用的壓差預冷設備；應用於菇類產業後，可以快速降低香菇菇體體溫、但仍保持香菇的硬度？",
            "option": [
                "可移動式壓差預冷模組",
                "固定式壓差預熱模組"
            ],
            "answer": "1",
        },
        {
            "question": "本計畫展示的外銷採後處理技術中，鳳梨和鳳梨釋迦皆運用哪個機械進行預冷，並且可以快速降溫。",
            "option": [
                "直立式壓差預熱",
                "側吸式壓差預冷"
            ],
            "answer": "2",
        }
    ],
    "Dots": [
        "北部葉菜水冷系統",
        "流動冰灌注之青花菜",
        "流動灌注冰機",
        "側吸式壓差預冷機",
        "頂吸式壓差預冷技術加速產品進入漸進式降溫程序",
        "適用於青花菜之淋水式冰水預冷設備",
    ],
}

const { createApp } = Vue

createApp({
    data() {
        return {
            expandMenu: false,
            menu: [{

                id: '1',
                name: '活動資訊',
            },
            {
                id: '2',
                name: '電子號碼布',
            },
            {
                id: '3',
                name: '陪跑親友加油禮',
            },
            {
                id: '4',
                name: '完賽證明',
            },
            {
                id: '5',
                name: '路跑獎項',
            },
            {
                id: '6',
                name: '線上路跑規則',
            },
            {
                id: '7',
                name: '紀錄上傳專區',
            },
            {
                id: '8',
                name: '我要報名',
            },
            {
                id: '9',
                name: '聯絡資訊',
            }
            ],
            name: '',
            number: '',
            showDialog: false,
            numberUrl: '',
        }
    },
    methods: {
        download() {
            if (this.numberUrl) {
                const link = document.createElement('a');
                link.download = 'number.png';
                link.href = this.numberUrl;
                link.click();
            }
        },
        setCombinedResultCanvas() {
            const canvas = document.getElementById(`combinedResultCanvas`);
            const content = canvas.getContext("2d");

            // 清除画布
            content.clearRect(0, 0, canvas.width, canvas.height);

            const backgroundImage = document.getElementById("number-bg");
            content.drawImage(backgroundImage, 0, 0, 1600, 900);

            content.font = "62px system-ui";
            content.textAlign = "right";
            content.fillStyle = "#231815";
            content.fillText(this.name, 1500, 520);

            content.font = "220px system-ui";
            content.textAlign = "center";
            content.fillStyle = "#231815";
            content.fillText(this.number, 1300, 750);

            let compositeDataURL = canvas.toDataURL("image/webp")
            this.numberUrl = compositeDataURL;
            console.log('compositeDataURL', compositeDataURL)

        },
        setShowDialog() {
            this.showDialog = !this.showDialog
        },
        setExpandMenu() {
            this.expandMenu = !this.expandMenu
        },
        scrollSmoothTo(elementId) {
            document.getElementById(`block${elementId}`).scrollIntoView({
                behavior: 'smooth'
            });
        },
        share() {
            const locationHref = window.location.href
            const url = `https://www.facebook.com/sharer/sharer.php?u=${locationHref}&amp;src=sdkpreparse`

            window.open(url)
        }
    },
    async created() {
    },
    async mounted() {
    },

})
    .mount('#app')