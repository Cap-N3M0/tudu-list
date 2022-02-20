function validateObject(in_param){
    var returnObj = {
        isEmpty : false,
        isEmptyList : []
    };
    // let counter = 0;
    
    if(typeof(in_param)===typeof{}){
        in_param.map((obj)=>{
            for(const [key, value] of Object.entries(obj)){
                if(value.trim() === null || value.trim() === '' || value === 0){
                    returnObj.isEmptyList.push(key);
                    returnObj.isEmpty = true;
                }
            }
            return 0;
        });
    }    
    return returnObj;
}

export default validateObject ;