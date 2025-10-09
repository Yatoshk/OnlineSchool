var builder = WebApplication.CreateBuilder(args);


var app = builder.Build();
app.UseDefaultFiles(); 
app.UseStaticFiles(); 

app.UseHttpsRedirection();

// app.MapGet("/", async context =>
// {
//     context.Response.ContentType = "text/html";
//     await context.Response.SendFileAsync("wwwroot/index.html");
// }).WithName("Root");
//
// app.MapGet("/home", async context =>
// {
//     context.Response.ContentType = "text/html";
//     await context.Response.SendFileAsync("wwwroot/index.html");
// }).WithName("Home");
//
// app.MapGet("/information", async context =>
// {
//     context.Response.ContentType = "text/html";
//     await context.Response.SendFileAsync("wwwroot/index.html");//todo information.index
// }).WithName("Information");

app.MapFallbackToFile("index.html");

app.Run();

