
exports.homepage = async(req,res) => {
    const locals = {
        title:'NotesWEB',
        description:'A simple and easy to use Notes website'
    }
    res.render('index',{
        locals,
        layout:'../views/layouts/front-page'
    });
}

exports.about = async(req,res) => {
    const locals = {
        title:'About - NotesWEB',
        description:'A simple and easy to use Notes website'
    }
    res.render('about',locals);
}