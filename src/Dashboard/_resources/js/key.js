function key (okey){
    var ticketkey = ""
    switch (okey){
        case "BNETZ":
            ticketkey = "MECANTZ"
            break
            case "DTAG":
                ticketkey = "DELTON"
                break
            case "IDF": 
                ticketkey = "FIREBIRD"
                break
            case "LFVB": 
                ticketkey = "BIRLAS"
                break
            case "LFVDD":
                ticketkey = "DEDLAN"
                break
            case "LFVD":
                ticketkey = "NOVELA"
                break
            case "LFVEF": 
                ticketkey = "THERFUR"
                break
            case "LFVHH": 
                ticketkey = "HANWAJO"
                break
            case "LFVH": 
                ticketkey = "NILAS"
                break
            case "LFVM":
                ticketkey = "MANYLAS"
                break
            case "LFVS":
                ticketkey = "STUBOR"
                break
            case "LFVWI":
                ticketkey = "WONRA"
                break
            case "LKADD":
                ticketkey = "SELMA"
                break
            case "LKAHH":
                ticketkey = "HALDUR"
                break
            case "LKAKI":
                ticketkey = "KESOL"
                break
            case "LKAMD":
                ticketkey = "LUGA"
                break
            case "LKAMZ":
                ticketkey = "RACLA"
                break
            case "LKAM":
                ticketkey = "LUNFT"
                break
            case "LKASB":
                ticketkey = "SALAPO"
                break
            case "LKAS":
                ticketkey = "LuLu"
                break
            case "LUX":
                ticketkey = "HERZOG"
                break
            case "VODA":
                ticketkey = "VINADO"
                break
            case "ZKAK":
                ticketkey = "ZOKILA"
                break
            default:
                ticketkey = "anknown key"
                break
            }
            return ticketkey
}
export{key}