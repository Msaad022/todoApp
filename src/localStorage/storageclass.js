class LacalStorge {

    isfound(nameStorge,value) {
        let checkLocal = localStorage.getItem(nameStorge)
        ! checkLocal ? this.setlocalstorge(nameStorge,value) : null
        return this.showlocal(nameStorge)
    }

    setlocalstorge(key,value) { 
        localStorage.setItem( key, JSON.stringify(value) ) 
    }

    deletelocal(key) { 
        localStorage.removeItem(key) 
    }

    showlocal(key) { 
        return JSON.parse(localStorage.getItem(key))
    }

}

export default new LacalStorge