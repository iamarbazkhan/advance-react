class DataApi{
    constructor(rawData){
        this.rawData=rawData;
    }
    
    mapIntoObject=(arr)=>{
        return arr.reduce((data,curr)=>{
            data[curr.id]=curr;
            return data;
        },{})
    }
    getArticles=()=>{
        return this.mapIntoObject(this.rawData.articles)
    }
    getAuthors=()=>{
        return this.mapIntoObject(this.rawData.authors);
    }
}

export default DataApi;