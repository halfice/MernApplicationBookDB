const expres=require('express');
const router=express.router();

//load book model
const Book=require('../../model/book');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test',(req,res)=>res.send('test connectiondone'));


router.get('/:id',(req,res)=>{
    Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({nobookfound:"No book found"}));
});




router.post('/',(req,res)=>{
Book.create(req.body)
.then(book=>res.status(200).json({msg:'successfully created'}))
.catch(err =>res.status(400).json({err:err.message}));
});


router.put('/:id',(req,res) =>{
Book.findByIdAndUpdate(req.params.id,req.body)
.then(book => res.json({ msg: 'Updated successfully' }))
.catch(err=>res.status(400).json({err:err.message}));

});




router.delete('/:id',(req,res)=>{
Book.findByIdAndDelete(req.params.id,req.body)
.then(book => res.json({ msg: 'Updated successfully' }))
.catch(err=>res.status(400).json({err:err.message}));



});


module.exports=router;