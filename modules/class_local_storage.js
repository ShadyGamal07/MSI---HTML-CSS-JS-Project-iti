
// class to get number of avilable items in card 
export default class local_storage{

    constructor() {
    }
    get items_in_card() {
        let cnt = 0;
        for(let i=0 ; i<localStorage.length ; i++){
            if(isNaN(localStorage.key(i)) == false ){
                cnt++;
            }
        }
        return cnt;
    }

    // DrawTable() {
    //     console.log("Test My Table");
    // }

}