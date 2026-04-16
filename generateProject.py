import os

folder_base = "E:\Projects\Git\ASP.NET\OnlineSchool\OnlineSchoolCopy\WebApp"
src_folder = os.path.join(folder_base, "src")

list_of_folders = ["assets", "assets/fonts", "assets/images", 
                   "assets/icons", "components", "components/common", 
                   "components/layout", "composables", "router", 
                   "service", "styles", "utils", "views"]

try:
    for folder in list_of_folders:
        folder_name = os.path.join(src_folder, folder)
        os.mkdir(folder_name)
        print(f"Folder '{folder_name}' created.")
except FileExistsError:
    print(f"Folder already exists.")