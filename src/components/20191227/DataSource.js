const Users = [
    { "id": 1, "first_name": "Tiffi", "last_name": "Dallmann", "email": "tdallmann0@facebook.com", "gender": "Female", "ip_address": "209.75.219.13" },
    { "id": 2, "first_name": "Merridie", "last_name": "Rowthorn", "email": "mrowthorn1@sakura.ne.jp", "gender": "Female", "ip_address": "179.113.177.0" },
    { "id": 3, "first_name": "Odelle", "last_name": "Lethem", "email": "olethem2@goo.ne.jp", "gender": "Female", "ip_address": "113.221.157.95" },
    { "id": 4, "first_name": "Phillipp", "last_name": "Hars", "email": "phars3@google.co.jp", "gender": "Male", "ip_address": "198.205.69.46" },
    { "id": 5, "first_name": "Yorgos", "last_name": "Bairnsfather", "email": "ybairnsfather4@amazon.co.uk", "gender": "Male", "ip_address": "202.92.63.8" },
    { "id": 6, "first_name": "Duke", "last_name": "Sigars", "email": "dsigars5@ucoz.ru", "gender": "Male", "ip_address": "163.107.135.142" },
    { "id": 7, "first_name": "Antonius", "last_name": "Orchart", "email": "aorchart6@photobucket.com", "gender": "Male", "ip_address": "249.83.114.58" },
    { "id": 8, "first_name": "Sheryl", "last_name": "Doy", "email": "sdoy7@printfriendly.com", "gender": "Female", "ip_address": "173.139.249.148" },
    { "id": 9, "first_name": "Merrilee", "last_name": "Massinger", "email": "mmassinger8@fotki.com", "gender": "Female", "ip_address": "127.170.169.110" },
    { "id": 10, "first_name": "Natalina", "last_name": "Summons", "email": "nsummons9@cbc.ca", "gender": "Female", "ip_address": "58.240.12.185" },
    { "id": 11, "first_name": "Elsbeth", "last_name": "Royden", "email": "eroydena@edublogs.org", "gender": "Female", "ip_address": "174.67.112.245" },
    { "id": 12, "first_name": "Aldon", "last_name": "Meekins", "email": "ameekinsb@ycombinator.com", "gender": "Male", "ip_address": "234.203.153.162" },
    { "id": 13, "first_name": "Ashly", "last_name": "Nafziger", "email": "anafzigerc@patch.com", "gender": "Female", "ip_address": "26.149.157.53" },
    { "id": 14, "first_name": "Dalli", "last_name": "Svanini", "email": "dsvaninid@51.la", "gender": "Male", "ip_address": "11.168.31.198" },
    { "id": 15, "first_name": "Janene", "last_name": "Roelofs", "email": "jroelofse@blog.com", "gender": "Female", "ip_address": "66.58.90.199" },
    { "id": 16, "first_name": "Gregorio", "last_name": "Tabourel", "email": "gtabourelf@tripod.com", "gender": "Male", "ip_address": "219.89.216.83" },
    { "id": 17, "first_name": "Jo-ann", "last_name": "Groombridge", "email": "jgroombridgeg@disqus.com", "gender": "Female", "ip_address": "61.46.4.23" },
    { "id": 18, "first_name": "Caterina", "last_name": "Koubu", "email": "ckoubuh@ucsd.edu", "gender": "Female", "ip_address": "5.132.181.209" },
    { "id": 19, "first_name": "Hubie", "last_name": "Volk", "email": "hvolki@unblog.fr", "gender": "Male", "ip_address": "206.207.58.253" },
    { "id": 20, "first_name": "Bayard", "last_name": "Hagard", "email": "bhagardj@bluehost.com", "gender": "Male", "ip_address": "223.65.19.101" }
];

const getUsers = () => Users;

const getUserById = id => Users.find(user => user.id === id);

export default { getUsers, getUserById };
