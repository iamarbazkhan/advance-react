class DataApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: "",
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
    setInterval(()=>{
      this.mergeWithState({
        timestamp:new Date()
      })
    },1000)
  }

  mapIntoObject = (arr) => {
    return arr.reduce((data, curr) => {
      data[curr.id] = curr;
      return data;
    }, {});
  };
  getArticles = () => {
    return this.data.articles;
  };
  getAuthors = () => {
    return this.data.authors;
  };
  getState = () => {
    return this.data;
  };
  subscribe = (cb) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };
  unSubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((cb) => cb());
  };

  mergeWithState =(stateChange)=>{
    this.data={
      ...this.data,
      ...stateChange
    }
    this.notifySubscribers()
  }
  setSearchTerm = (searchTerm) => {
    this.mergeWithState({
      searchTerm,
    })
  };
}

export default DataApi;
