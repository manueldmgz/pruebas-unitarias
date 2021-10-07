describe("Probando Jest", () => {

    test("Prueba de objetos iguales", () => {

        const datos1 = {
            nombre: "Manuel",
            edad: 26
        };

        const datos2 = {
            nombre: "Manuel",
            edad: 26
        };

        expect(datos1).toEqual(datos2);
    })
})