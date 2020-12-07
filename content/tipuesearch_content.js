var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git', 'tags': '', 'url': 'About.html'}, {'title': 'hw3', 'text': '第3題 \n kaggle:\xa0\xa0 https://www.kaggle.com/wtf40923241/hw3333333333 \n 第13題 \n kaggle:\xa0  https://www.kaggle.com/wtf40923241/hw3-0013 \n 第26題 \n kaggle:\xa0  https://www.kaggle.com/wtf40923241/hw3-0026', 'tags': '', 'url': 'hw3.html'}, {'title': 'hw2', 'text': '列出一乙數列 \n import   urllib.request \n target_url  =   "https://nfulist.herokuapp.com/?semester=1091&courseno=0776" \n cp1b  =   [] \n for   line  in   urllib.request.urlopen(target_url): \n \xa0\xa0\xa0\xa0 cp1b.append( int (line.decode( \'utf-8\' ).rstrip())) \n print (cp1b) \n \n 參考資料 \n https://www.kaggle.com/mdecourse/cp2020-hw2', 'tags': '', 'url': 'hw2.html'}, {'title': 'hw1', 'text': '12-1============================================================================================= Ethernet Standards 以太網標準 \n 10Base-T (802.3i, 1990) as well as 100Base-T and 1000Base-T (1GBASE-T or 1 GigE) Ethernet standards, which are most commonly found in current office networks. We will discover how to plan a basic network connection using 100BaseT. Finally, we will cover differences between Ethernet and TCP/IP. 10Base-T（802.3i，1990）以及100Base-T和1000Base-T（1GBASE-T或1 GigE）以太網標準，它們是當前辦公網絡中最常見的標準。我們將發現如何使用100BaseT規劃基本的網絡連接。最後，我們將介紹以太網和TCP / IP之間的差異。 \n 12-2============================================================================================= Ethernet Technology 以太網技術 \n The original 802.3 Ethernet standard sent data over coaxial cables at a half-duplex transmission rate which means devices can only transmit (TX) or Receive (RX) alternately at separate intervals because the data used the same path for both. This is analagous to communicating using a walkie-talkie rather than a telephone. 最初的802.3以太網標準以半雙工傳輸速率通過同軸電纜發送數據，這意味著設備只能以單獨的間隔交替發送（TX）或接收（RX），因為這兩個數據使用相同的路徑。這類似於使用對講機而不是電話進行通信。 \n This coaxial cable design became known as Thicknet and later Thinnet due to the size of the cables and was mostly used in bus and ring network topologies. 由於電纜的尺寸，這種同軸電纜設計被稱為Thinnet，後來被稱為Thinnet，並且主要用於總線和環形網絡拓撲中。 \n Twisted pair cabling, dubbed 10BaseT, provided the same 10 Mbps half-duplex maximum bandwidth with a category 3 cable, but the distance was limited to 100 meters due to the lack of the extra shield that coaxial provided. In spite of the increased attenuation (loss of signal strength over distance), network designers moved to twisted pair cabling because of ease of installation and overall lower cost. Coaxial cable fell out of favor and the 802.3 Ethernet standard continues to evolve with faster data rates over twisted pair cabling categories. 雙絞線電纜（稱為10BaseT）與第3類電纜可提供相同的10 Mbps半雙工最大帶寬，但由於缺少同軸電纜提供的額外屏蔽，因此距離限制為100米。儘管衰減增加（信號強度隨距離的損失），但由於易於安裝和總體成本較低，網絡設計人員仍選擇雙絞線佈線。同軸電纜不受歡迎，並且802.3以太網標準繼續發展，雙絞線佈線類別的數據速率更快。 \n 12-3============================================================================================= Carrier Sense Multiple Access/Collision Detect 載波偵聽多路訪問/衝突檢測 \n The carrier sense portion means that the device “listens” to the network first to find a “break” in the conversation. If the device doesn’t hear other devices transmitting, then it begins its transmission. Multiple access refers to every device having equal access to the network at all times. This is unlike the token ring network in which each device had to wait for the signal (token) before transmitting. Finally, we have collision detection as part of the CSMA/CD control method. If, by chance, two devices both were ready to transmit, they “listened” to the network for a “lull” in the conversation, and both started transmitting at the same time, the devices are able to detect that they both transmitted at the same time and caused a collision. 運營商感知部分意味著設備首先“監聽”網絡以在會話中找到“中斷”。如果該設備聽不到其他設備的傳輸，則開始傳輸。多路訪問是指每台設備始終具有對網絡的平等訪問權限。這與令牌環網絡不同，在令牌環網絡中，每個設備都必須在發送之前等待信號（令牌）。最後，我們將碰撞檢測作為CSMA / CD控制方法的一部分。如果偶然地兩個設備都準備好發送，它們在通話中“偵聽”網絡中的“失敗”，並且都同時開始發送，則設備能夠檢測到它們都在發送時發送。同時又造成了碰撞。 \n \n Four devices are connected in a physical bus topology. Each device has equal access to the network. Here, all the devices are listening, trying to determine if any other device is communicating before beginning transmission. 四個設備以物理總線拓撲連接。每個設備對網絡都有平等的訪問權限。在這裡，所有設備都在監聽，試圖確定是否有其他設備在開始傳輸之前進行通信。 \n \n When a collision is detected, both devices choose a backoff time at random, and then attempt to retransmit again. In the diagram below, the computers choose to wait 200 milliseconds and 300 milliseconds, respectively. When that time is up, they will attempt to sense if another machine is already transmitting. If there is nothing detected, the first machine will transmit its message. Once completed, the second machine will then transmit its message, after its 300 millisecond wait time. 當檢測到衝突時，兩個設備都會隨機選擇一個退避時間，然後嘗試重新傳輸。在下圖中，計算機分別選擇等待200毫秒和300毫秒。時間到時，他們將嘗試檢測另一台機器是否已經在傳輸。如果未檢測到任何內容，則第一台機器將發送其消息。一旦完成，第二台機器將在其300毫秒的等待時間之後發送其消息。 \n \n 12-4============================================================================================ Evolution of Standards 標準的演變 \n The Ethernet standard also determines the type of cable, its bandwidth, and its distance limitation. It is important to know these standards, especially those that relate to a category 3, 5, 5e, and 6 cabling standard. 以太網標準還確定電纜的類型，帶寬和距離限制。重要的是要知道這些標準，尤其是與3、5、5e和6類佈線標準有關的標準。 \n \n Simply put, bandwidth is the theoretical maximum of the given standard, whereas throughput is the actual potential in a real-world scenario. Many factors affect actual throughput, such as half-duplex vs. full-duplex, cable length, and quality. Both bandwidth and throughput are measured in bits per second (bps) with the prefix K (kilobit), M (megabit), or G (gigabit) 簡而言之，帶寬是給定標準的理論最大值，而吞吐量是實際情況下的實際潛力。許多因素會影響實際吞吐量，例如半雙工與全雙工，電纜長度和質量。帶寬和吞吐量均以每秒比特數（bps）以及前綴K（千比特），M（兆比特）或G（千兆比特）來衡量。 \n \n 12-5============================================================================================ Planning a Basic Network Connection Using 100/1000BaseT 使用100 / 1000BaseT規劃基本的網絡連接 \n Current technology in most small office/home office (SOHO) environments will have auto-sensing networking hardware. There are older switches and routers that still remain in some networks that do not have the ability to run at 100/1000BaseT, so check your network documentation! 大多數小型辦公室/家庭辦公室（SOHO）環境中的當前技術都將具有自動感應網絡硬件。在某些網絡中仍然存在一些較舊的交換機和路由器，這些交換機和路由器仍無法在100 / 1000BaseT上運行，因此請查看您的網絡文檔！ \n A cat 5 cable was standard for 100BaseT but will limit throughput to 100 Mbps so you must use cat 5e or cat 6 if you are trying to achieve 1000BaseT (1 Gbps). Cat 5電纜是100BaseT的標準配置，但會將吞吐量限制為100 Mbps，因此，如果要實現1000BaseT（1 Gbps），則必須使用Cat 5e或Cat 6。 \n Most current SOHO environments will have Ethernet wall jacks internally connecting to the next network device, be it a switch or a hub. But, if there is not a connection already present, you must remember that all copper-based Ethernet cable is limited to 100 meters. Do not run the wire in an area where the cabling can cause a safety hazard, become damaged due to environmental conditions, or suffer from electromagnetic interference (EMI). 當前大多數SOHO環境將在內部將以太網牆壁插孔連接到下一個網絡設備，無論是交換機還是集線器。但是，如果尚不存在連接，則必須記住所有基於銅纜的以太網電纜限制為100米。請勿在可能會導致安全隱患，因環境條件而損壞電纜或遭受電磁干擾（EMI）的區域中佈線。 \n After the machine is connected and powered on (assuming Windows 7 or later), watch the system tray after boot-up to see if there is a wired network icon. The standard Windows 7 icons are: 連接機器並打開電源後（假設使用Windows 7或更高版本），啟動後請查看系統托盤，以查看是否有有線網絡圖標。 Windows 7的標準圖標是： \n Access the “network sharing center” to select the type of network access you need to have and add any devices required for the node (e.g., a printer). Verify access by opening the browser or using a command line tool to verify connectivity and addressing. 訪問“網絡共享中心”以選擇所需的網絡訪問類型，並添加該節點所需的任何設備（例如打印機）。通過打開瀏覽器或使用命令行工具來驗證訪問權限，以驗證連接性和地址。 \n \n 12-6============================================================================================ Differentiating Between Ethernet and TCP/IP 區分以太網和TCP / IP \n Although CompTIA A+ does not test on the open systems interconnection model (OSI model), it is a theoretical model that is the basis for the way data travels through computer networks. When you click on an icon and connect to the Internet through a browser such as Google Chrome, Mozilla Firefox, or Internet Explorer, a request to connect is sent through a series of steps from the application layer down to the physical layer. All data physically enters and exits a computer node (client, server, or printer) through a network interface card (NIC) based on the type of medium being used (wireless, copper, or fiber-optic) 儘管CompTIA A +並未在開放系統互連模型（OSI模型）上進行測試，但它是一種理論模型，是數據在計算機網絡中傳輸的基礎。當您單擊圖標並通過瀏覽器（例如Google Chrome，Mozilla Firefox或Internet Explorer）連接到Internet時，連接請求將通過從應用程序層到物理層的一系列步驟發送。根據使用的介質類型（無線，銅纜或光纖），所有數據都通過網絡接口卡（NIC）物理地進入和退出計算機節點（客戶端，服務器或打印機） \n \n The popularity of Ethernet is based on the standardization of protocols and ability to use the TCP/IP suite to carry data throughout a variety of hardware devices. 以太網的普及是基於協議的標準化以及使用TCP / IP套件在各種硬件設備中傳輸數據的能力。 \n Ethernet is defined by the IEEE 802.3 specification, which sets the standard and interoperability between devices, allowing communication over computer networks. These specifications control how data physically travels between nodes on both the physical layer and the data link layer through media access control (MAC). The hardware controlled by these specifications include NICs, wiring (i.e., cat 5, 5e, and 6) including the RJ-45 connectors, switches, and hubs. 以太網由IEEE 802.3規範定義，該規範設置了設備之間的標準和互操作性，從而允許通過計算機網絡進行通信。這些規範通過媒體訪問控制（MAC）控制數據在物理層和數據鏈路層上的節點之間的物理傳輸方式。這些規範所控制的硬件包括NIC，包括RJ-45連接器，交換機和集線器的佈線（即Cat 5、5e和6）。 \n Whereas Ethernet controls the physical data, transmission control protocol and Internet protocol (TCP/IP) is a suite of protocols that operate logically throughout the different layers of the OSI model as well as in the TCP/IP model. 以太網控制物理數據，而傳輸控制協議和Internet協議（TCP / IP）是一套協議，可以在OSI模型的不同層以及TCP / IP模型中進行邏輯操作。 \n \n 13-1============================================================================================ IPv4 and IPv6 Addresses IPv4和IPv6地址 \n Computer networks — including the Internet, which is the largest computer network — use Transmission Control Protocol/Internet Protocol or TCP/IP for network communications both internally on a LAN/WAN and externally to the Internet. \n TCP/IP provides end-to-end connectivity of data. TCP/IP specifies how data should be grouped, addressed, transmitted, routed, and received at the destination address. The TCP/IP model, along with many of its protocols, is maintained and managed by the IETF (Internet Engineering Task Force). 計算機網絡（包括作為最大計算機網絡的Internet）使用傳輸控制協議/ Internet協議或TCP / IP進行內部LAN / WAN上和外部Internet的網絡通信。 \n TCP / IP提供數據的端到端連接。 TCP / IP指定如何在目標地址處對數據進行分組，尋址，傳輸，路由和接收。 TCP / IP模型及其許多協議由IETF（Internet工程任務組）維護和管理。 \n \n While the majority of our networks today still use IPv4, many networks are migrating to the newer IPv6 addressing standards. Additionally, many networks are offering dual support to both IPv4 and IPv6 during the transition. The reason for this transition is that we were running out of valid IPv4 addresses. IPv4 uses a 32-bit addressing scheme, providing only 4.2 billion available addresses, but IPv6 uses a 128-bit addressing scheme. 儘管當今我們的大多數網絡仍使用IPv4，但許多網絡正在遷移到更新的IPv6尋址標準。此外，在過渡期間，許多網絡都對IPv4和IPv6提供雙重支持。進行此轉換的原因是我們用盡了有效的IPv4地址。 IPv4使用32位尋址方案，僅提供42億個可用地址，而IPv6使用128位尋址方案。 \n 13-2============================================================================================ IPv4 Addressing IPv4尋址 \n Internet protocol (IP) networking relies on both an IP address and subnet mask using a 32-bit dotted decimal notation. The Internet Engineering Task Force (IETF) and the Internet Corporation for Assigned Names and Numbers (ICANN) developed and maintains the standards for IP allocation and protocols. Internet協議（IP）網絡使用32位點分十進製表示法同時依賴IP地址和子網掩碼。互聯網工程任務組（IETF）和互聯網名稱與數字地址分配機構（ICANN）制定並維護了IP分配和協議的標準。 \n Each octet is made up of eight bits (one byte or two nibbles); multiplied by four octets, that equals 32 bits. The maximum value for any octet is 255 (28-1) so therefore the maximum number of IPv4 addresses available is 232, which equals 4,294,967,296 unique addresses. \n The presence of the subnet mask tells networking devices how much of the IP address belongs to the network and how much to the host. The 255.255.255.0 subnet represents that the first three octets are the network and the “0” represents the available number of hosts (nodes). So, the form is N.N.N.H. Think of the combination of IP and subnet as similar to regular postal addresses. You need a zip code (subnet) and street address (host). 每個八位位組由八位組成（一個字節或兩個半字節）。乘以四個八位位組，等於32位。任何八位位組的最大值為255（28-1），因此，可用的IPv4地址的最大數量為232，等於4,294,967,296個唯一地址。 \n 子網掩碼的存在告訴網絡設備多少IP地址屬於網絡，多少屬於主機。 255.255.255.0子網表示前三個八位位組是網絡，“ 0”表示可用的主機（節點）數。因此，表格為N.N.N.H.可以將IP和子網的組合視為類似於常規郵政地址。您需要一個郵政編碼（子網）和街道地址（主機）。 \n 13-3============================================================================================ IPv4 Address Classes IPv4地址類別 \n As you can see, when the subnet mask has a 255 in it, it is defining the network portion of the address. In class A addresses, the first octet defines the network, and the last three define the host. In class B addresses, the first two octets define the network, the last two define the host. In class C addresses, the first three octets define the network, the last one defines the host. 如您所見，當子網掩碼中包含255時，它定義了地址的網絡部分。在A類地址中，第一個八位位組定義網絡，最後三個八位位組定義主機。在B類地址中，前兩個八位位組定義網絡，後兩個定義主機。在C類地址中，前三個八位位組定義網絡，最後一個八位位組定義主機。 \n \n Subnet masks are used to define the specific network we are referencing. A standard class A subnet mask of 255.0.0.0 is used for all networks where the first octet starts with a number between 1 and 126. Recall from the subnet table below, our network was 10.0.0.0. 子網掩碼用於定義我們要引用的特定網絡。 255.0.0.0的標準A類子網掩碼適用於所有第一個八位位組以1到126之間的數字開頭的網絡。從下面的子網表中調用，我們的網絡為10.0.0.0。 \n \n Therefore, this address fits into the class A category. In this course, we only deal with “classful” subnet masks — the ones that only contain values of 255 and 0. In future courses, you may see other subnet masks used to further break apart the networks. 因此，該地址屬於A類類別。在本課程中，我們僅處理“有類”子網掩碼-僅包含255和0的值。在以後的課程中，您可能會看到其他子網掩碼用於進一步拆分網絡。 \n \n Private IP addresses, on the other hand, can be used by anyone without any prior coordination. This is because private IP addresses are not routable over the Internet and are only used inside your local area network. For example, at your home, you may have five computers hooked up to your switch and those machines are all using private IP addresses. When you make a request to go outside the network, like to visit a college’s website, your router performs a network address translation (NAT) that allows your private IP address to be converted into a public IP address and a port, which then makes the request on your behalf. There is a specific range of IP addresses that are reserved as private for internal use (by you and others). 另一方面，任何人都可以使用私有IP地址，而無需事先協調。這是因為專用IP地址無法通過Internet路由，而只能在局域網內使用。例如，在家裡，您可能有五台計算機連接到交換機，而這些計算機都使用私有IP地址。當您發出訪問網絡的請求（例如訪問大學的網站）時，路由器會執行網絡地址轉換（NAT），該轉換可將您的私有IP地址轉換為公共IP地址和端口，從而使代表您提出要求。有一個特定範圍的IP地址保留為私有（供您和他人使用）供內部使用。 \n 13-4============================================================================================ Assigning an IP Address 分配IP地址 \n The first component of a properly configured IPv4 network client is the IP address. This is the logical name assigned to that particular host. In the image below, you can see that the host is assigned 200.200.200.5. No other device on the network can have this exact IP address or conflicts will occur. This IP address is like the device’s first name: no one else in its family (or network in this case) can have this IP address. 正確配置的IPv4網絡客戶端的第一部分是IP地址。這是分配給該特定主機的邏輯名稱。在下圖中，您可以看到為主機分配了200.200.200.5。網絡上的任何其他設備都不能具有此確切的IP地址，否則會發生衝突。該IP地址就像設備的名字一樣：其係列（在這種情況下為網絡）中沒有其他人可以使用此IP地址。 \n \n The second component of a properly configured IPv4 network client is the subnet mask. The subnet mask is required to ensure that the host knows what other IP addresses are on its network (which is defined by the subnet mask). In this example, the default class C subnet mask was used, which is 255.255.255.0. This tells the client that its host’s IP address resides on the 200.200.200.0 network, so other IPs in the 200.200.200.x range will be in the same subnet. \n The third component of a properly configured IPv4 network client is the default gateway. This is the IP address of the device (normally a router) that connects this particular network to another network. For example, if our host wants to talk to someone outside of the 200.200.200.0 network, it would send the message to this default gateway (200.200.200.10 in our example), and this device will forward that request outside of the network. \n The final component of a properly configured IPv4 network client is the DNS server IP address, or WINS server IP. The DNS server is the domain name system server, and is responsible for converting domain names into IP addresses for the host. For example, if you wanted to go to www.google.com, your host doesn’t know where that is, but the DNS server does know the location. Providing your host with the DNS server address allows it to send the request to the DNS server, which will convert the name into an IP address, and send that address back to the requesting host, which can then go to that IP address with the request. A WINS server is like a DNS server, but is specific to Windows NetBIOS computer names and IP addresses. WINS is usually used inside a Windows network, while DNS is used for clients on the Internet. 正確配置的IPv4網絡客戶端的第二個組件是子網掩碼。需要子網掩碼以確保主機知道其網絡上還有哪些其他IP地址（由子網掩碼定義）。在此示例中，使用了默認的C類子網掩碼，即255.255.255.0。這告訴客戶端其主機的IP地址位於200.200.200.0網絡上，因此200.200.200.x範圍內的其他IP將位於同一子網中。 \n 正確配置的IPv4網絡客戶端的第三個組件是默認網關。這是將該特定網絡連接到另一個網絡的設備（通常是路由器）的IP地址。例如，如果我們的主機希望與200.200.200.0網絡外部的某人交談，則它將消息發送到該默認網關（在我們的示例中為200.200.200.10），並且該設備將把該請求轉發到網絡外部。 \n 正確配置的IPv4網絡客戶端的最後一個組件是DNS服務器IP地址或WINS服務器IP。 DNS服務器是域名系統服務器，並負責將域名轉換為主機的IP地址。例如，如果您想訪問www.google.com，則您的主機不知道該地址在哪裡，但是DNS服務器確實知道該位置。為您的主機提供DNS服務器地址可以使其向DNS服務器發送請求，DNS服務器會將名稱轉換為IP地址，然後將該地址發送回請求主機，然後主機可以隨請求轉到該IP地址。 WINS服務器類似於DNS服務器，但特定於Windows NetBIOS計算機名稱和IP地址。 WINS通常在Windows網絡內部使用，而DNS用於Internet上的客戶端。 \n \n Dynamic configuration is much quicker and easier. There are two dynamic configuration methods: DHCP and BOOTP. Dynamic host configuration protocol (DHCP) is simple for large networks and less confusing, because a server handles the assignment of the IP addresses for the client, as well as the subnet mask, default gateway, and DNS server. In practice, the network administrator simply provides the DHCP server with a range of IP addresses to hand out, and the DHCP server does all the work for the network administrator. The DHCP server gives a client an IP address and the associated parameters, as well as a “lease time.” The lease time is the specific amount of time the client is allowed to use that IP address. When the lease is nearing the end of its term, the DHCP server gives the client the option of keeping the lease longer (if it is still using it), or the server can take the lease back to reuse (if it cannot get in touch with the client at the lease renewal). Most large-scale networks and most home networks use DHCP for configuration. \n Bootstrap protocol, more commonly referred to as BOOTP, is an older dynamic addressing protocol and only assigns IP addresses, subnet masks, and default gateways. BOOTP doesn’t support providing DNS server information or WINS server information. BOOTP is considered obsolete now, as it has been replaced by DHCP. DHCP, on the other hand, is based upon the legacy BOOTP protocol but added DNS, WINS and other variables that are related to newer standards like voice-over IP. If your network is dynamically configured, DHCP is most likely in use. 動態配置更快，更容易。動態配置方法有兩種：DHCP和BOOTP。動態主機配置協議（DHCP）對於大型網絡來說很簡單，並且不易混淆，因為服務器可以處理客戶端IP地址的分配以及子網掩碼，默認網關和DNS服務器。實際上，網絡管理員只需為DHCP服務器提供一系列IP地址即可分發，而DHCP服務器將為網絡管理員完成所有工作。 DHCP服務器為客戶端提供IP地址和關聯的參數，以及“租用時間”。租用時間是允許客戶端使用該IP地址的特定時間。當租約即將到期時，DHCP服務器會為客戶端提供延長租約（如果仍在使用租約）的選項，或者服務器可以將租約重新使用（如果無法聯繫）與客戶續約）。大多數大型網絡和大多數家庭網絡都使用DHCP進行配置。 \n Bootstrap協議（通常稱為BOOTP）是一種較舊的動態尋址協議，僅分配IP地址，子網掩碼和默認網關。 BOOTP不支持提供DNS服務器信息或WINS服務器信息。 BOOTP現在已被淘汰，因為它已被DHCP取代。另一方面，DHCP基於舊式BOOTP協議，但增加了DNS，WINS和其他與諸如語音IP之類的新標準相關的變量。如果您的網絡是動態配置的，則最有可能使用DHCP。 \n 13-5============================================================================================ IPv6 IPv6 \n Internet protocol version 6 was developed to provide more public IP addresses, because the IPv4 public addressing space was running out as a result of the proliferation of network devices in our lives. Now, our cellphones, laptops, tablets, thermostats, refrigerators, TVs, and more are all being connected to the network and they all need IP addresses. Due to the 32-bit addresses used by IPv4, we were limited to 4.2 billion IP addresses, but by increasing the address space to 128-bit addresses in IPv6, the number of IP addresses available has increased to 340 undecillion addresses. This is 5 x 1028 IPv6 addresses for every person on the planet, including children. \n IPv5 was designed, but eventually skipped in implementation, because it was only a 64-bit address and some feared it didn’t provide a large enough pool of available IP addresses. This experimental protocol was abandoned, but many of its concepts were incorporated into the IPv6 protocol, as well as some other protocols. Internet協議版本6的開發是為了提供更多的公共IP地址，因為由於我們生活中網絡設備的激增，IPv4公共尋址空間已耗盡。現在，我們的手機，筆記本電腦，平板電腦，恆溫器，冰箱，電視等已全部連接到網絡，並且它們都需要IP地址。由於IPv4使用32位地址，我們只能使用42億個IP地址，但是通過將地址空間增加到IPv6中的128位地址，可用的IP地址數量已增加到340個十億位地址。這是地球上每個人（包括孩子）的5 x 1028 IPv6地址。 \n IPv5是經過設計的，但最終被跳過，因為它只是一個64位地址，並且有人擔心它不能提供足夠大的可用IP地址池。這個實驗性的協議被放棄了，但是它的許多概念以及其他一些協議都被合併到了IPv6協議中。 \n IPv6 has many benefits over IPv4, the biggest of which is the number of available IP addresses. In IPv6, there is no broadcast provided, which frees up IP addresses, reduces the amount of traffic sent over the network, and increases bandwidth. Also, IPv6 doesn’t allow packets to be fragmented (broken into pieces) during transmission. This is handled by the protocol by resizing the maximum transmission unit size each time a session is created between two devices. \n A major benefit of IPv6 is that it allows for dual stack implementation, which means that IPv4 and IPv6 can run simultaneously on a device and provide service to the device from either protocol without conflict. IPv6 can also run on top of IPv4 as a tunneled protocol, thereby allowing it to run over older devices, as well. \n Lastly, the packet headers in IPv6 are much simpler than in IPv4. In IPv4, there are 12 fields that must be completely filled out (adding to overhead and complexity), but in IPv6 this was reduced to the bare minimum of five fields. This includes fields such as source and destination address, as well as quality of service priority. 與IPv4相比，IPv6有很多好處，其中最大的好處就是可用IP地址的數量。在IPv6中，沒有提供廣播，這釋放了IP地址，減少了通過網絡發送的流量，並增加了帶寬。另外，IPv6不允許在傳輸過程中將數據包分段（分成碎片）。協議通過每次在兩個設備之間創建會話時調整最大傳輸單元大小來解決此問題。 \n IPv6的主要優點在於它允許雙協議棧實現，這意味著IPv4和IPv6可以在設備上同時運行，並可以從任一協議向設備提供服務而不會發生衝突。 IPv6還可以作為隧道協議在IPv4之上運行，從而也可以在較舊的設備上運行。 \n 最後，IPv6中的數據包頭比IPv4中的數據包頭簡單得多。在IPv4中，必須完全填寫12個字段（增加了開銷和復雜性），但是在IPv6中，該字段減少到最少五個字段。這包括諸如源地址和目標地址以及服務質量優先級之類的字段。 \n While IPv6 has numerous improvements over IPv4, the most notable thing about IPv6 that people see is the format of the address. Instead of the dotted-decimal notation we used in IPv4 with addresses like 192.168.1.1, IPv6 uses eight groupings of four hexadecimal digits in each group. Each group is then broken apart by a colon (:). An example of an IPv6 address is 2002:0000:0000:0000:0000:0000:4815:54ae. \n A hexadecimal digit allows for counting from zero to 15 using the digits 0-9, then the letters A through F. Each hexadecimal digit replaces four binary digits (or four 1s and 0s), allowing us to write an IPv6 address using (at most) 32 hexadecimal digits. \n Luckily, the creators of IPv6 allowed for a shorthand. First, anytime there are leading zeros, they can be dropped. This is equivalent to dropping the leading zeros in the number 0010 to 10. The numbers are equivalent, as long as the zeros are in front of the other digits. The second shorthand technique involves several groupings of four zeros. When multiple groupings of four zeros are present, they can be represented by a double colon (::). Note that you can only use the double colon once per address, because the only way to know how many sets of zeros you’ve replaced with the double colon is to compare the shorthand address with the total number of bits available. 儘管IPv6相對於IPv4進行了許多改進，但是人們看到的關於IPv6的最值得注意的事情是地址的格式。 IPv6代替了我們在IPv4中使用的類似192.168.1.1的地址的點分十進製表示法，而是在每組中使用四個十六進制數字組成的八組。然後，每個組用冒號（:)分隔。 IPv6地址的示例是2002：0000：0000：0000：0000：0000：0000：4815：54ae。 \n 十六進制數字允許使用數字0-9從0到15進行計數，然後使用字母A至F。每個十六進制數字都替換了四個二進制數字（或四個1和0），從而使我們可以使用（最多為）32個十六進制數字。 \n 幸運的是，IPv6的創建者允許使用簡寫形式。首先，只要有前導零，就可以將其丟棄。這等效於將數字0010中的前導零刪除為10。這些數字是等效的，只要零在其他數字的前面即可。第二種速記技術涉及四個零的幾個分組。當存在四個零的多個分組時，可以用雙冒號（：:)表示。請注意，每個地址只能使用雙冒號一次，因為要知道用雙冒號替換了多少個零集的唯一方法是將速記地址與可用位數進行比較。 \n 13-6============================================================================================ Classful Vs. Classless Addressing: Subnet and CIDR 相對於無類尋址：子網和CIDR \n The IP address always determines the class of a network and never the subnet. When the IP addresses match, the network is said to be using a “classful” scheme. However, this allows for many wasted IP addresses when a company needs more publicly routable IP addresses than the address class they are using offers. Classless inter-domain routing (CIDR) was developed in order to make the IP addressing scheme more efficient and to delay the depletion of IPv4 addresses. Essentially, some of the network bits in the default subnet mask are borrowed and used for the host portion of the network. For example, if a business needs 300 public IP addresses, then class C addresses would be too small because of the 254 device limitation, and class B would be excessively large. With CIDR, a business could be assigned an IP address range with a subnet of 255.255.254.0/23. In CIDR notation, “/23” indicates that the first 23 bits of the address are the network part of the address, which leaves the last nine bits for host addresses, rather than the eight bits that would be available in classful addressing. That means there will now be 510 IP numbers available rather than 254. IP地址始終確定網絡的類別，而不是子網。如果IP地址匹配，則稱網絡正在使用“分類”方案。但是，當公司需要比他們使用的地址類更多的可公共路由的IP地址時，這會浪費許多IP地址。開發無類域間路由（CIDR）的目的是使IP尋址方案更高效並延遲IPv4地址的耗盡。本質上，默認子網掩碼中的某些網絡位被借用並用於網絡的主機部分。例如，如果一家企業需要300個公共IP地址，則由於254個設備限制，C類地址將太小，而B類將太大。使用CIDR，可以為企業分配IP地址範圍，其子網為255.255.254.0/23。在CIDR表示法中，“ / 23”表示地址的前23位是地址的網絡部分，剩下的最後9位用於主機地址，而不是分類尋址中可用的8位。這意味著現在將有510個IP號碼，而不是254個。 \n Link-local addresses are special addresses assigned by the operating system when either there is no statically assigned IP address, or the DHCP does not assign one to the network interface. Link-local addresses are not routable and only function in a LAN segment. In IPv4, the address range is 169.254.0.0/16 and the form is 169.254.x.x. In IPv6, the form is FE80::/64. In a Microsoft OS, the link-local address is referred to as automatic private IP addressing (APIPA). 當沒有靜態分配的IP地址，或者DHCP沒有為網絡接口分配一個IP地址時，本地鏈接地址是操作系統分配的特殊地址。本地鏈接地址不可路由，只能在LAN網段中使用。在IPv4中，地址範圍為169.254.0.0/16，格式為169.254.x.x。在IPv6中，格式為FE80 :: / 64。在Microsoft操作系統中，本地鏈接地址稱為自動專用IP尋址（APIPA）。 \n DHCP works by having an authoritative device, either a server or a router, offering to assign the IP address. In order for this to work, the client must be configured to look for the DHCP authority, and confirm that it will accept the IP assignment. These settings are located in “network connections” through either the network and sharing center or directly through the control panel. The configuration settings are located in the properties of the connection under either IPv4 or IPv6. DHCP通過擁有授權設備（服務器或路由器）來分配IP地址而起作用。為了使它起作用，必須將客戶端配置為尋找DHCP授權，並確認它將接受IP分配。這些設置通過網絡和共享中心位於“網絡連接”中，也可以直接通過控制面板位於“網絡連接”中。配置設置位於IPv4或IPv6下的連接屬性中。 \n The domain name system (DNS) is a part of the Internet protocol that translates IP addresses to name addresses. There is a setting located in the network properties section of the IPv4 or IPv6 property window that allows for the manual setting of the the domain name system (DNS) server address. The local DNS cache will keep a local record of IP address to name conversion for both LAN devices and Internet addresses. Alternate DNS server addresses can be added to the client to assist in name resolution, thus improving data flow. 域名系統（DNS）是Internet協議的一部分，該協議將IP地址轉換為名稱地址。 IPv4或IPv6屬性窗口的網絡屬性部分中有一個設置，允許手動設置域名系統（DNS）服務器地址。本地DNS緩存將保留IP地址到LAN設備和Internet地址的名稱轉換的本地記錄。可以將備用DNS服務器地址添加到客戶端以幫助名稱解析，從而改善數據流。 \n The gateway is the device that connects different networks types together. In most SOHO (small office, home office) environments today, this is the router that connects the LAN to the ISP modem through the WAN port (cable, DSL, or FIOS), which provides Internet access. In a larger corporate environment, it is the last router in the LAN that connects to a WAN link, and then passes the IP packets to their destination. The difference is that in a larger corporate environment, there can be multiple LAN segments and routers between the client workstation and the gateway. 網關是將不同網絡類型連接在一起的設備。在當今的大多數SOHO（小型辦公室，家庭辦公室）環境中，這是通過WAN端口（電纜，DSL或FIOS）將LAN連接到ISP調製解調器的路由器，可以提供Internet訪問。在較大的公司環境中，它是LAN中的最後一個路由器，它連接到WAN鏈接，然後將IP數據包傳遞到其目的地。區別在於，在較大的公司環境中，客戶端工作站和網關之間可以有多個LAN網段和路由器。 \n 13-7============================================================================================ Windows Networking Windows網絡 \n Windows networking is nearly identical in all aspects from Vista through to Windows 10. To access the network settings, go to either the control panel, then “network and Internet,” then “network and sharing center,” or right-click the “open network and sharing center” icon in the system tray (next to the clock). 從Vista到Windows 10，Windows聯網在各個方面都幾乎相同。要訪問網絡設置，請轉到控制面板，然後依次單擊“網絡和Internet”，“網絡和共享中心”，或右鍵單擊“打開”。網絡和共享中心”圖標（位於時鐘旁邊）。 \n \n Double-click the IPv4 properties dialogue box and set both radio buttons to “obtain (an IP address/DNS server address) automatically.” The window on the right in the image below allows for the APIPA address to be automatically assigned or for the user to configure a static IPv4 address. 雙擊“ IPv4屬性”對話框，並將兩個單選按鈕設置為“自動獲取（IP地址/ DNS服務器地址）”。下圖右側的窗口允許自動分配APIPA地址或允許用戶配置靜態 \n 心得:網站全都是英文的真的有點看不懂 \n', 'tags': '', 'url': 'hw1.html'}, {'title': '活得好累 想休息了', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n', 'tags': '', 'url': '活得好累 想休息了.html'}, {'title': 'W8', 'text': 'https://www.kaggle.com/wtf40923241/w8cp2020', 'tags': '', 'url': 'W8.html'}]};