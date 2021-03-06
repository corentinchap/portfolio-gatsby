export default { 
    main: "light",
    background: '#fff',
    backgroundSecondary: '#B2EBF2',
    primary: "#174ffc",
    secondary: '#fe9b34',
    fontColor: "rgba(0, 0, 0, .90)",
    pattern: ` 
        opacity:0.2;
        background-color:silver;
        background-image:
        radial-gradient(circle at 100% 150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
        radial-gradient(circle at 0    150%, silver 24%, white 24%, white 28%, silver 28%, silver 36%, white 36%, white 40%, transparent 40%, transparent),
        radial-gradient(circle at 50%  100%, white 10%, silver 10%, silver 23%, white 23%, white 30%, silver 30%, silver 43%, white 43%, white 50%, silver 50%, silver 63%, white 63%, white 71%, transparent 71%, transparent),
        radial-gradient(circle at 100% 50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent),
        radial-gradient(circle at 0    50%, white 5%, silver 5%, silver 15%, white 15%, white 20%, silver 20%, silver 29%, white 29%, white 34%, silver 34%, silver 44%, white 44%, white 49%, transparent 49%, transparent);
        background-size: 100px 50px;`,
    shadow: "0px -2px 11px #7b7b7b",
    breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',   
    }
}