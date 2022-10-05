const categoryservice=require('../../services/category.services');
const {category}=require('../../models/index');

const allcategorydata=[
    {
        id:1,
        name:'electronics'
    },
    {
        id:2,
        name:'car'
    },
]
const createdata={
    name:'fashion',
    description:'only fashion matters'
}

test('when categories is called all categories should be returned',async ()=>{
    const spy=jest.spyOn(category,'findAll').mockReturnValue(allcategorydata);
    const result =await categoryservice.getcategory();

    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(allcategorydata);
});

test('when categories is called create categories should be returned',async ()=>{
    const spy=jest.spyOn(category,'create').mockReturnValue(createdata);
    const result =await categoryservice.createallcategory(createdata);

    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(createdata);
});

test('when categories is called all categories by name should be returned',async ()=>{
    const spy=jest.spyOn(category,'findAll').mockReturnValue(allcategorydata);
    const result =await categoryservice.getcategorybyname('car');

    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(allcategorydata);
});

test('when categories is called all udated categories by name should be returned',async ()=>{
    const spy=jest.spyOn(category,'update').mockReturnValue(createdata);
    const result =await categoryservice.updatecategory(2,createdata);

    expect(spy).toHaveBeenCalled();
    expect(result).toEqual(createdata);
});

