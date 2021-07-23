import axios from "axios"
import * as config from "../config/index"

/**
 * modal service
 */
export class DataService {
    static base = config.API_BASE
    static getNote() {
        return axios.get(DataService.base+'/note')
    }
    static getProducts(search: string, page: number, per_page: number) {
        // let sstr = `srch_txt=${search}&amp;page=${page}&amp;per_page=${per_page}`
        // if(sstr){
        //     sstr = '?' + sstr
        // }
        // const url = `${DataService.base}/api/filterdata${sstr}`
        // console.log(url)
        // return axios.get(url)

        return new Promise(res => res({data: {...testData}}))
    }
}

const testData = {"srch_key": "spark", "states": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Puerto Rico"], "class_aap": ["4300-COMPUTERS", "7017-IGNITION", "7127-MISCELLANEOUS", "7407-MISCELLANEOUS TOOLS", "7575-CONVENTIONAL", "7576-PREMIUM", "7577-NON-AUTOMOTIVE", "7578-DIESEL", "7702-WIRE SETS", "7703-COIL BOOTS", "7897-ENGINE GASKETS", "7900-FLUID SEALING GASKETS", "8265-IGNITION TOOLS", "8268-SPECIALTY PLIARS", "9089-AUTOMOTIVE HARDWARE", "9348-ELECTRICAL SYSTEMS", "9406-SMALL ENGINE"], "txt_az": [{"SKU": "11931905", "AAP_Part_No": "W83164", "AAP_Item_Name": "THREAD KIT 1 EA PERFR", "AAP_Item_Price": "$ 16.99", "AZ_Part_No": "25649", "AZ_Item_Name": "OEMTOOLS 14mm Spark Plug Rethreader Kit", "AZ_Reg_Price____Zipwise": "$ 17.49", "AZ_Promo_Price___Zipwise": "-", "AZ_Brand": "OEM", "AZ_Category": "THREAD REPAIR", "Division": "200-ACCESSORIES", "BPG": "550-HAND & SPECIALTY TOOLS", "Department": "700-SPECIALTY TOOLS", "Class": "7407-MISCELLANEOUS TOOLS", "VP": "AS", "PSD": "RANDY VALONE", "CM": "TOM GILLILAN", "Week_Number": "202128"}, {"SKU": "19650342", "AAP_Part_No": "3961", "AAP_Item_Name": "SPARK PLUG 1 EA NGK", "AAP_Item_Price": "$ 2.99", "AZ_Part_No": "3961", "AZ_Item_Name": "NGK 3961 Spark Plug", "AZ_Reg_Price____Zipwise": "$ 2.99", "AZ_Promo_Price___Zipwise": "-", "AZ_Brand": "NGK", "AZ_Category": "NON AUTOMOTIVE SPARK PLUG", "Division": "1600-PARTS", "BPG": "3450-IGNITION/EMISSION -SPARK PLUGS", "Department": "6941-SPARK PLUGS", "Class": "7577-NON-AUTOMOTIVE", "VP": "UH", "PSD": "DAVE BRANSON", "CM": "GREG DROBNY", "Week_Number": "202128"}, {"SKU": "5014999", "AAP_Part_No": "42009", "AAP_Item_Name": "SPK PLUG NON FOULER 2 PA MTRMT", "AAP_Item_Price": "$ 6.99", "AZ_Part_No": "42009", "AZ_Item_Name": "Dorman - HELP 18mm Gasket Seat Spark Plug Non Foulers 2 Pack 42009", "AZ_Reg_Price____Zipwise": "$ 6.99", "AZ_Promo_Price___Zipwise": "-", "AZ_Brand": "HELP", "AZ_Category": "SPARK PLUG NON-FOULER", "Division": "1600-PARTS", "BPG": "2300-DORMAN - INNOVATION", "Department": "7809-DORMAN - FRONT ROOM", "Class": "9089-AUTOMOTIVE HARDWARE", "VP": "UH", "PSD": "TARA BATES", "CM": "PHIL SMALLWOOD", "Week_Number": "202128"}, {"SKU": "3036766", "AAP_Part_No": "ESC103", "AAP_Item_Name": "ESC MODULE-RMFD 1 EA CQBWD", "AAP_Item_Price": "$ 91.99", "AZ_Part_No": "ESC100", "AZ_Item_Name": "Duralast Electronic Spark Control Module ESC100", "AZ_Reg_Price____Zipwise": "$ 96.49", "AZ_Promo_Price___Zipwise": "-", "AZ_Brand": "DURALAST", "AZ_Category": "ELECTRONIC SPARK CONTROL MODULE", "Division": "1600-PARTS", "BPG": "3150-IGNITION/EMISSION - ELECTRICAL COMPONENTS", "Department": "4300-ENGINE COMPUTER CONTROLS", "Class": "4300-COMPUTERS", "VP": "UH", "PSD": "DAVE BRANSON", "CM": "LAURA GILLILAN", "Week_Number": "202128"}, {"SKU": "11275742", "AAP_Part_No": "6719", "AAP_Item_Name": "NGK V-POWER CARDED 1 EA NGK", "AAP_Item_Price": "$ 3.69", "AZ_Part_No": "6719", "AZ_Item_Name": "NGK Spark Plug 6719", "AZ_Reg_Price____Zipwise": "$ 3.69", "AZ_Promo_Price___Zipwise": "-", "AZ_Brand": "NGK", "AZ_Category": "NON AUTOMOTIVE SPARK PLUG", "Division": "200-ACCESSORIES", "BPG": "850-OIL & GAS ACCESSORIES", "Department": "7858-SMALL ENGINE OIL & GAS", "Class": "9406-SMALL ENGINE", "VP": "BM", "PSD": "CARTER GAGNON", "CM": "CASSIDY WAGONER", "Week_Number": "202128"}, {"SKU": "5392349", "AAP_Part_No": "CR43TS", "AAP_Item_Name": "SPARK PLUG 1 EA ACDEL", "AAP_Item_Price": "$ 2.99", "AZ_Part_No": "CR43TS", "AZ_Item_Name": "ACDelco Copper Spark Plug CR43TS", "AZ_Reg_Price____Zipwise": "$ 2.99", "AZ_Promo_Price___Zipwise": "-", "AZ_Brand": "ACDELCO", "AZ_Category": "SPARK PLUG", "Division": "1600-PARTS", "BPG": "3450-IGNITION/EMISSION -SPARK PLUGS", "Department": "6941-SPARK PLUGS", "Class": "7575-CONVENTIONAL", "VP": "UH", "PSD": "DAVE BRANSON", "CM": "GREG DROBNY", "Week_Number": "202128"}, {"SKU": "3055892", "AAP_Part_No": "S4143", "AAP_Item_Name": "TRANS SPARK CTRL SW 1 EA CQBWD", "AAP_Item_Price": "$ 9.99", "AZ_Part_No": "PS474", "AZ_Item_Name": "Duralast Automatic Transmission Spark Control Switch PS474", "AZ_Reg_Price____Zipwise": "$ 9.99", "AZ_Promo_Price___Zipwise": "-", "AZ_Brand": "DURALAST", "AZ_Category": "AUTO TRANS SPARK CONTROL SWITCH", "Division": "1600-PARTS", "BPG": "3150-IGNITION/EMISSION - ELECTRICAL COMPONENTS", "Department": "4350-SWITCHES & RELAYS", "Class": "7127-MISCELLANEOUS", "VP": "UH", "PSD": "DAVE BRANSON", "CM": "LAURA GILLILAN", "Week_Number": "202128"}, {"SKU": "10422946", "AAP_Part_No": "41-962", "AAP_Item_Name": "SPARK PLUG 1 EA ACDEL", "AAP_Item_Price": "$ 8.59", "AZ_Part_No": "41-962", "AZ_Item_Name": "ACDelco Double Platinum Spark Plug 41-962", "AZ_Reg_Price____Zipwise": "$ 8.49", "AZ_Promo_Price___Zipwise": "-", "AZ_Brand": "ACDELCO", "AZ_Category": "SPARK PLUG", "Division": "1600-PARTS", "BPG": "3450-IGNITION/EMISSION -SPARK PLUGS", "Department": "6941-SPARK PLUGS", "Class": "7576-PREMIUM", "VP": "UH", "PSD": "DAVE BRANSON", "CM": "GREG DROBNY", "Week_Number": "202128"}, {"SKU": "10075900", "AAP_Part_No": "W80540", "AAP_Item_Name": "SPARK GAP GAUGE 1 EA TOUEN", "AAP_Item_Price": "$ 1.79", "AZ_Part_No": "2101", "AZ_Item_Name": "AutoZone Spark Plug Gap Gauge", "AZ_Reg_Price____Zipwise": "$ 2.99", "AZ_Promo_Price___Zipwise": "-", "AZ_Brand": "AUTOZONE", "AZ_Category": "SPARK PLUG GAP GAUGE", "Division": "200-ACCESSORIES", "BPG": "550-HAND & SPECIALTY TOOLS", "Department": "700-SPECIALTY TOOLS", "Class": "8265-IGNITION TOOLS", "VP": "AS", "PSD": "RANDY VALONE", "CM": "TOM GILLILAN", "Week_Number": "202128"}, {"SKU": "3217809", "AAP_Part_No": "ES 72105", "AAP_Item_Name": "SPARK PLUG TUBE SEAL FLPRO", "AAP_Item_Price": "$ 33.99", "AZ_Part_No": "ES72105", "AZ_Item_Name": "FEL-PRO Spark Plug Tube Seal ES72105", "AZ_Reg_Price____Zipwise": "$ 33.99", "AZ_Promo_Price___Zipwise": "-", "AZ_Brand": "FEL-PRO", "AZ_Category": "SPARK PLUG TUBE SEAL", "Division": "1600-PARTS", "BPG": "9997-GASKETS", "Department": "7116-ENGINE GASKETS", "Class": "7897-ENGINE GASKETS", "VP": "UC", "PSD": "DAVE POPLIN", "CM": "ERIN FURR", "Week_Number": "202128"}], "flag": 1, "headers_az": ["AAP SKU", "AAP Part Number", "AAP Item Name", "AAP Price", "AZO Part Number", "AZO Item Name", "AZO Regular Price", "AZO Promo Price", "AZO Brand", "AZO Category", "AAP Division", "AAP BPG", "AAP Department", "AAP Class", "VP", "PSD", "CM", "Week Number"], "txt_or": [{"SKU": "10075900", "AAP_Part_No": "W80540", "AAP_Item_Name": "SPARK GAP GAUGE 1 EA TOUEN", "AAP_Item_Price": "$ 1.79", "OR_Part_No": "W80536", "OR_Item_Name": "Performance Tool Spark Plug Gap Gauge ", "OR_Reg_Price___Zipwise": "$ 2.99", "OR_Promo_Price___Zipwise": "-", "OR_Line_No": "PFM", "Division": "200-ACCESSORIES", "BPG": "550-HAND & SPECIALTY TOOLS", "Department": "700-SPECIALTY TOOLS", "Class": "8265-IGNITION TOOLS", "VP": "AS", "PSD": "RANDY VALONE", "CM": "TOM GILLILAN", "Week_Number": "202128"}, {"SKU": "22149384", "AAP_Part_No": "917-005", "AAP_Item_Name": "SPARK PLUG TUBE 1 EA DORMA", "AAP_Item_Price": "$ 7.29", "OR_Part_No": "917-005", "OR_Item_Name": "Dorman OE Solutions Spark Plug Tube ", "OR_Reg_Price___Zipwise": "$ 6.99", "OR_Promo_Price___Zipwise": "-", "OR_Line_No": "DOR", "Division": "1600-PARTS", "BPG": "4150-DORMAN - UNDERCAR / UNDERHOOD", "Department": "7829-INNOVATION", "Class": "9348-ELECTRICAL SYSTEMS", "VP": "UH", "PSD": "TARA BATES", "CM": "JORGE LOZADA", "Week_Number": "202128"}, {"SKU": "6900119", "AAP_Part_No": "4048", "AAP_Item_Name": "IGNITION WIRE SET 1 EA ACCEL", "AAP_Item_Price": "$ 48.99", "OR_Part_No": "4048", "OR_Item_Name": "ACCEL Super Stock Spark Plug Wire Set  ", "OR_Reg_Price___Zipwise": "$ 45.99", "OR_Promo_Price___Zipwise": "-", "OR_Line_No": "ACC", "Division": "1600-PARTS", "BPG": "3500-PERFORMANCE PARTS", "Department": "4975-PERFORMANCE IGNITION/STARTING/CHARGING", "Class": "7017-IGNITION", "VP": "BM", "PSD": "ERIN RYAN", "CM": "WILLIAM FELDERMAN", "Week_Number": "202128"}, {"SKU": "19650342", "AAP_Part_No": "3961", "AAP_Item_Name": "SPARK PLUG 1 EA NGK", "AAP_Item_Price": "$ 2.99", "OR_Part_No": "3961", "OR_Item_Name": "NGK Copper Core Spark Plug ", "OR_Reg_Price___Zipwise": "$ 2.99", "OR_Promo_Price___Zipwise": "-", "OR_Line_No": "NGK", "Division": "1600-PARTS", "BPG": "3450-IGNITION/EMISSION -SPARK PLUGS", "Department": "6941-SPARK PLUGS", "Class": "7577-NON-AUTOMOTIVE", "VP": "UH", "PSD": "DAVE BRANSON", "CM": "GREG DROBNY", "Week_Number": "202128"}, {"SKU": "5014964", "AAP_Part_No": "42002", "AAP_Item_Name": "SPK PLUG NON FOULER 2 PA MTRMT", "AAP_Item_Price": "$ 5.99", "OR_Part_No": "42002", "OR_Item_Name": "Dorman HELP! Spark Plug Non-Fouler ", "OR_Reg_Price___Zipwise": "$ 5.99", "OR_Promo_Price___Zipwise": "-", "OR_Line_No": "MTM", "Division": "1600-PARTS", "BPG": "2300-DORMAN - INNOVATION", "Department": "7809-DORMAN - FRONT ROOM", "Class": "9089-AUTOMOTIVE HARDWARE", "VP": "UH", "PSD": "TARA BATES", "CM": "PHIL SMALLWOOD", "Week_Number": "202128"}, {"SKU": "19650153", "AAP_Part_No": "3951", "AAP_Item_Name": "SPARK PLUG-V POWER 1 EA NGK", "AAP_Item_Price": "$ 3.39", "OR_Part_No": "3951", "OR_Item_Name": "NGK V-Power Nickel Plug Number TR55 Spark Plug ", "OR_Reg_Price___Zipwise": "$ 3.49", "OR_Promo_Price___Zipwise": "-", "OR_Line_No": "NGK", "Division": "1600-PARTS", "BPG": "3450-IGNITION/EMISSION -SPARK PLUGS", "Department": "6941-SPARK PLUGS", "Class": "7575-CONVENTIONAL", "VP": "UH", "PSD": "DAVE BRANSON", "CM": "GREG DROBNY", "Week_Number": "202128"}, {"SKU": "11931905", "AAP_Part_No": "W83164", "AAP_Item_Name": "THREAD KIT 1 EA PERFR", "AAP_Item_Price": "$ 16.99", "OR_Part_No": "W83164", "OR_Item_Name": "Performance Tool M14 Spark Plug Rethread Kit ", "OR_Reg_Price___Zipwise": "$ 16.99", "OR_Promo_Price___Zipwise": "-", "OR_Line_No": "PFM", "Division": "200-ACCESSORIES", "BPG": "550-HAND & SPECIALTY TOOLS", "Department": "700-SPECIALTY TOOLS", "Class": "7407-MISCELLANEOUS TOOLS", "VP": "AS", "PSD": "RANDY VALONE", "CM": "TOM GILLILAN", "Week_Number": "202128"}, {"SKU": "18470522", "AAP_Part_No": "861-1", "AAP_Item_Name": "SPARK PLUG-SML ENG 1 EA CHMPN", "AAP_Item_Price": "$ 2.59", "OR_Part_No": "861-1", "OR_Item_Name": "Champion Copper Plus Spark Plug ", "OR_Reg_Price___Zipwise": "$ 2.09", "OR_Promo_Price___Zipwise": "-", "OR_Line_No": "CHP", "Division": "200-ACCESSORIES", "BPG": "850-OIL & GAS ACCESSORIES", "Department": "7858-SMALL ENGINE OIL & GAS", "Class": "9406-SMALL ENGINE", "VP": "BM", "PSD": "CARTER GAGNON", "CM": "CASSIDY WAGONER", "Week_Number": "202128"}, {"SKU": "10717118", "AAP_Part_No": "ES 72481", "AAP_Item_Name": "FP MISC SETS 1 EA FLPRO", "AAP_Item_Price": "$ 25.99", "OR_Part_No": "ES72481", "OR_Item_Name": "Fel-Pro Spark Plug Tube Seal Set ", "OR_Reg_Price___Zipwise": "$ 25.99", "OR_Promo_Price___Zipwise": "-", "OR_Line_No": "FEL", "Division": "1600-PARTS", "BPG": "9997-GASKETS", "Department": "7119-FLUID SEALING GASKETS", "Class": "7900-FLUID SEALING GASKETS", "VP": "UC", "PSD": "DAVE POPLIN", "CM": "ERIN FURR", "Week_Number": "202128"}, {"SKU": "3217809", "AAP_Part_No": "ES 72105", "AAP_Item_Name": "SPARK PLUG TUBE SEAL FLPRO", "AAP_Item_Price": "$ 33.99", "OR_Part_No": "ES72105", "OR_Item_Name": "Fel-Pro Spark Plug Tube Seal Set ", "OR_Reg_Price___Zipwise": "$ 23.99", "OR_Promo_Price___Zipwise": "-", "OR_Line_No": "FEL", "Division": "1600-PARTS", "BPG": "9997-GASKETS", "Department": "7116-ENGINE GASKETS", "Class": "7897-ENGINE GASKETS", "VP": "UC", "PSD": "DAVE POPLIN", "CM": "ERIN FURR", "Week_Number": "202128"}], "headers_or": ["AAP SKU", "AAP Part Number", "AAP Item Name", "AAP Price", "ORY Part Number", "ORY Item Name", "ORY Regular Price", "ORY Promo Price", "ORY Line Number", "AAP Division", "AAP BPG", "AAP Department", "AAP Class", "VP", "PSD", "CM", "Week Number"], "category": ["AUTO TRANS SPARK CONTROL SWITCH", "ELECTRONIC SPARK CONTROL MODULE", "GLOW PLUG", "NON AUTOMOTIVE SPARK PLUG", "PERFORMANCE SPARK PLUG", "SMALL ENGINE TOOLS", "SPARK PLUG", "SPARK PLUG GAP GAUGE", "SPARK PLUG NON-FOULER", "SPARK PLUG THREAD REPAIR KIT", "SPARK PLUG TUBE SEAL", "SPARK PLUG WIRE HOLDER", "SPARK PLUG WIRE RETAINER", "THREAD REPAIR", "VALVE COVER GASKET", "WIRESET"], "line": ["ACC", "ACD", "ATO", "BOS", "CHP", "DEN", "DOR", "ETH", "FEL", "IDW", "LIS", "MOT", "MTM", "NGK", "OMS", "PFM", "PRI"], "txt_np": [{"SKU": "10422946", "AAP_Part_No": "41-962", "AAP_Item_Name": "Spark Plug 1 EA ACDEL", "AAP_Item_Price": "$ 8.59", "NAPA_Part_No": "AC 41962", "NAPA_Item_Name": "Spark Plug - Platinum", "NAPA_Reg_Price___Zipwise": "$ 7.29", "NAPA_Promo_Price___Zipwise": "-", "NAPA_Brand": "ACDELCO", "NAPA_Category": "SEARCH RESULTS", "Division": "1600-Parts", "BPG": "3450-Ignition/Emission -Spark Plugs", "Department": "6941-SPARK PLUGS", "Class": "7576-PREMIUM", "VP": "UH", "PSD": "Dave Branson", "CM": "GREG DROBNY", "Week_Number": "202128"}, {"SKU": "11058112", "AAP_Part_No": "9G", "AAP_Item_Name": "GLOW PLUG 1 EA GGMPT", "AAP_Item_Price": "$ 19.79", "NAPA_Part_No": "AC 9G", "NAPA_Item_Name": "Diesel Glow Plug", "NAPA_Reg_Price___Zipwise": "$ 18.99", "NAPA_Promo_Price___Zipwise": "-", "NAPA_Brand": "ACDELCO", "NAPA_Category": "SEARCH RESULTS", "Division": "1600-Parts", "BPG": "3450-Ignition/Emission -Spark Plugs", "Department": "6941-SPARK PLUGS", "Class": "7578-DIESEL", "VP": "UH", "PSD": "Dave Branson", "CM": "GREG DROBNY", "Week_Number": "202128"}, {"SKU": "10717118", "AAP_Part_No": "ES 72481", "AAP_Item_Name": "FP MISC SETS 1 EA FLPRO", "AAP_Item_Price": "$ 25.99", "NAPA_Part_No": "FPG ES72481", "NAPA_Item_Name": "Spark Plug Tube Seal Set", "NAPA_Reg_Price___Zipwise": "$ 22.99", "NAPA_Promo_Price___Zipwise": "-", "NAPA_Brand": "FEL-PRO GASKETS", "NAPA_Category": "SEARCH RESULTS", "Division": "1600-Parts", "BPG": "9997-Gaskets", "Department": "7119-FLUID SEALING GASKETS", "Class": "7900-FLUID SEALING GASKETS", "VP": "UC", "PSD": "Dave Poplin", "CM": "ERIN FURR", "Week_Number": "202128"}, {"SKU": "5014999", "AAP_Part_No": "42009", "AAP_Item_Name": "SPK PLUG NON FOULER 2 PA MTRMT", "AAP_Item_Price": "$ 6.99", "NAPA_Part_No": "NOE 7302442", "NAPA_Item_Name": "Spark Plug Non-Foulers - 18mm Gasket Seat", "NAPA_Reg_Price___Zipwise": "$ 7.29", "NAPA_Promo_Price___Zipwise": "-", "NAPA_Brand": "NAPA SOLUTIONS", "NAPA_Category": "SEARCH RESULTS", "Division": "1600-Parts", "BPG": "2300-DORMAN - INNOVATION", "Department": "7809-DORMAN - FRONT ROOM", "Class": "9089-AUTOMOTIVE HARDWARE", "VP": "UH", "PSD": "Tara Bates", "CM": "PHIL SMALLWOOD", "Week_Number": "202128"}, {"SKU": "11000125", "AAP_Part_No": "8020", "AAP_Item_Name": "NGK Resistor Cap 1 EA NGK", "AAP_Item_Price": "$ 3.29", "NAPA_Part_No": "NGW 8020", "NAPA_Item_Name": "Spark Plug Boot", "NAPA_Reg_Price___Zipwise": "$ 3.09", "NAPA_Promo_Price___Zipwise": "-", "NAPA_Brand": "NGK", "NAPA_Category": "SEARCH RESULTS", "Division": "1600-Parts", "BPG": "9998-Ignition/Emission - Wire", "Department": "7045-WIRESETS/COIL BOOTS", "Class": "7703-COIL BOOTS", "VP": "UH", "PSD": "Dave Branson", "CM": "GREG DROBNY", "Week_Number": "202128"}, {"SKU": "18470522", "AAP_Part_No": "861-1", "AAP_Item_Name": "SPARK PLUG-SML ENG 1 EA CHMPN", "AAP_Item_Price": "$ 2.59", "NAPA_Part_No": "CHA 8611", "NAPA_Item_Name": "Spark Plug - Copper Plus", "NAPA_Reg_Price___Zipwise": "$ 2.49", "NAPA_Promo_Price___Zipwise": "-", "NAPA_Brand": "CHAMPION", "NAPA_Category": "SEARCH RESULTS", "Division": "200-Accessories", "BPG": "850-Oil & Gas Accessories", "Department": "7858-Small Engine Oil & Gas", "Class": "9406-Small Engine", "VP": "BM", "PSD": "Carter Gagnon", "CM": "CASSIDY WAGONER", "Week_Number": "202128"}, {"SKU": "15500268", "AAP_Part_No": "8916", "AAP_Item_Name": "IGNITION WIRE SET 1 EA NGK", "AAP_Item_Price": "$ 59.99", "NAPA_Part_No": "NGW 8916", "NAPA_Item_Name": "Spark Plug Wire Set", "NAPA_Reg_Price___Zipwise": "$ 54.99", "NAPA_Promo_Price___Zipwise": "-", "NAPA_Brand": "NGK", "NAPA_Category": "SEARCH RESULTS", "Division": "1600-Parts", "BPG": "9998-Ignition/Emission - Wire", "Department": "7045-WIRESETS/COIL BOOTS", "Class": "7702-WIRE SETS", "VP": "UH", "PSD": "Dave Branson", "CM": "GREG DROBNY", "Week_Number": "202128"}, {"SKU": "19650342", "AAP_Part_No": "3961", "AAP_Item_Name": "SPARK PLUG 1 EA NGK", "AAP_Item_Price": "$ 2.99", "NAPA_Part_No": "NGK 3961", "NAPA_Item_Name": "Spark Plug - Standard Nickel", "NAPA_Reg_Price___Zipwise": "$ 2.99", "NAPA_Promo_Price___Zipwise": "-", "NAPA_Brand": "NGK", "NAPA_Category": "SEARCH RESULTS", "Division": "1600-Parts", "BPG": "3450-Ignition/Emission -Spark Plugs", "Department": "6941-SPARK PLUGS", "Class": "7577-NON-AUTOMOTIVE", "VP": "UH", "PSD": "Dave Branson", "CM": "GREG DROBNY", "Week_Number": "202128"}, {"SKU": "3217809", "AAP_Part_No": "ES 72105", "AAP_Item_Name": "SPARK PLUG TUBE SEAL FLPRO", "AAP_Item_Price": "$ 33.99", "NAPA_Part_No": "FPG ES72105", "NAPA_Item_Name": "Spark Plug Tube Seal Set", "NAPA_Reg_Price___Zipwise": "$ 23.49", "NAPA_Promo_Price___Zipwise": "-", "NAPA_Brand": "FEL-PRO GASKETS", "NAPA_Category": "SEARCH RESULTS", "Division": "1600-Parts", "BPG": "9997-Gaskets", "Department": "7116-ENGINE GASKETS", "Class": "7897-ENGINE GASKETS", "VP": "UC", "PSD": "Dave Poplin", "CM": "ERIN FURR", "Week_Number": "202128"}, {"SKU": "5392349", "AAP_Part_No": "CR43TS", "AAP_Item_Name": "SPARK PLUG 1 EA ACDEL", "AAP_Item_Price": "$ 2.99", "NAPA_Part_No": "AC CR43TS", "NAPA_Item_Name": "Spark Plug - Copper", "NAPA_Reg_Price___Zipwise": "$ 2.49", "NAPA_Promo_Price___Zipwise": "-", "NAPA_Brand": "ACDELCO", "NAPA_Category": "SEARCH RESULTS", "Division": "1600-Parts", "BPG": "3450-Ignition/Emission -Spark Plugs", "Department": "6941-SPARK PLUGS", "Class": "7575-CONVENTIONAL", "VP": "UH", "PSD": "Dave Branson", "CM": "GREG DROBNY", "Week_Number": "202128"}], "headers_np": ["AAP SKU", "AAP Part Number", "AAP Item Name", "AAP Price", "NAPA Part Number", "NAPA Item Name", "NAPA Regular Price", "NAPA Promo Price", "NAPA Brand", "NAPA Category", "AAP Division", "AAP BPG", "AAP Department", "AAP Class", "VP", "PSD", "CM", "Week Number"], "brand": ["ACDELCO", "AUTOLITE", "BOSCH", "CHAMPION", "DENSO", "FEL-PRO GASKETS", "NAPA SOLUTIONS", "NGK"], "no_of_records_az": 959, "no_of_records_or": 1199, "no_of_records_np": 1056, "no_of_pages_az": 96, "no_of_pages_or": 120, "no_of_pages_np": 106}