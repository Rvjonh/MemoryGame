/* Here are listed the elements of every type of card, 30 items for every type */

const Emojis = ["๐","๐","๐คฃ","๐ค","๐","๐","๐","๐","๐","๐","๐","๐",
                "๐","๐ฅฐ","๐","๐","๐","๐","๐ค","๐คฉ","๐ค","๐คจ","๐ฎ","๐ฅ",
                "๐ฃ","๐","๐","๐ถ","๐"];

const Letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","ร","O","P",
                "Q","R","S","T","U","V","W","X","Y","Z","$","ยฟ","?"];

const Numbers = ["1","2","3","4","5","6","7","8","9","10","ฯ","e","13","14","15","16",
                "17","18","19","20","21","22","23","24","25","26","27","28","29","30"]

const CardType ={
    Emojis,
    Letters,
    Numbers
}

export default function getCardItem(type="Emojis", index=0){
    try{
        return CardType[type][index];
    }catch{
        throw Error("Card type not found.")
    }
}