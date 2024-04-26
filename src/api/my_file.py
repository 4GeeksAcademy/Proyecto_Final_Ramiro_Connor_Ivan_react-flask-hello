
# Set your Cloudinary credentials
# ==============================
from dotenv import load_dotenv
load_dotenv()

# Import the Cloudinary libraries
# ==============================
import cloudinary
from cloudinary import CloudinaryImage
import cloudinary.uploader
import cloudinary.api

# Import to format the JSON responses
# ==============================
import json

# Set configuration parameter: return "https" URLs by setting secure=True  
# ==============================
config = cloudinary.config(secure=True)

# Log the configuration
# ==============================
print("****1. Set up and configure the SDK:****\nCredentials: ", config.cloud_name, config.api_key, "\n")

def uploadImage():

  # Upload the image and get its URL
  # ==============================

  # Upload the image.
  # Set the asset's public ID and allow overwriting the asset with new versions
  cloudinary.uploader.upload("https://cloudinary-devs.github.io/cld-docs-assets/assets/images/butterfly.jpeg", public_id="quickstart_butterfly", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/AR/flat/64.png", public_id="argentina_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/AU/flat/64.png", public_id="australia_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/BE/flat/64.png", public_id="belgium_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/BR/flat/64.png", public_id="brazil_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/CN/flat/64.png", public_id="china_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/EG/flat/64.png", public_id="egypt_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/FR/flat/64.png", public_id="france_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/GR/flat/64.png", public_id="greece_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/IN/flat/64.png", public_id="india_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/IT/flat/64.png", public_id="italy_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/ME/flat/64.png", public_id="mexico_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/PE/flat/64.png", public_id="peru_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/GB/flat/64.png", public_id="united_kingdom_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/US/flat/64.png", public_id="united_states_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/VE/flat/64.png", public_id="venezuela_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/3469505/pexels-photo-3469505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="colisseum", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/13107068/pexels-photo-13107068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="obelisco", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/2928058/pexels-photo-2928058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="trevi_fountain", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="taj_mahal", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="statue_of_liberty", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/2818895/pexels-photo-2818895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="christ_the_redeemer", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="sydney_opera_house", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/3873663/pexels-photo-3873663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="pyramids", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/12046436/pexels-photo-12046436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="chichen_itza", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="big_ben", unique_filename = False, overwrite=True)

  # Build the URL for the image and save it in the variable 'srcURL'
  srcURL = CloudinaryImage("quickstart_butterfly").build_url()
  flagArgentina = CloudinaryImage("argentina_flag").build_url()
  flagAustralia = CloudinaryImage("australia_flag").build_url()
  flagBelgium = CloudinaryImage("belgium_flag").build_url()
  flagBrazil = CloudinaryImage("brazil_flag").build_url()
  flagChina = CloudinaryImage("china_flag").build_url()
  flagEgypt = CloudinaryImage("egypt_flag").build_url()
  flagFrance = CloudinaryImage("france_flag").build_url()
  flagGreece = CloudinaryImage("greece_flag").build_url()
  flagIndia = CloudinaryImage("india_flag").build_url()
  flagItaly = CloudinaryImage("italy_flag").build_url()
  flagMexico = CloudinaryImage("mexico_flag").build_url()
  flagPeru = CloudinaryImage("peru_flag").build_url()
  flagUK = CloudinaryImage("united_kingdom_flag").build_url()
  flagUSA = CloudinaryImage("united_states_flag").build_url()
  flagVenezuela = CloudinaryImage("venezuela_flag").build_url()
  colisseum = CloudinaryImage("colisseum").build_url()
  obelisco = CloudinaryImage("obelisco").build_url()
  trevi = CloudinaryImage("trevi_fountain").build_url()
  tajMahal = CloudinaryImage("taj_mahal").build_url()
  statueOfLiberty = CloudinaryImage("statue_of_liberty").build_url()
  christTheRedeemer = CloudinaryImage("christ_the_redeemer").build_url()
  sydneyOperaHouse = CloudinaryImage("sydney_opera_house").build_url()
  pyramids = CloudinaryImage("pyramids").build_url()
  chichenItza = CloudinaryImage("chichen_itza").build_url()
  bigBen = CloudinaryImage("big_ben").build_url()

  # Log the image URL to the console. 
  # Copy this URL in a browser tab to generate the image on the fly.
  print("****2. Upload an image****\nDelivery URL: ", srcURL, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagArgentina, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagAustralia, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagBelgium, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagBrazil, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagChina, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagEgypt, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagFrance, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagGreece, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagIndia, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagItaly, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagMexico, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagPeru, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagUK, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagUSA, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagVenezuela, "\n")
  print("****2. Upload an image****\nDelivery URL: ", colisseum, "\n")
  print("****2. Upload an image****\nDelivery URL: ", obelisco, "\n")
  print("****2. Upload an image****\nDelivery URL: ", trevi, "\n")
  print("****2. Upload an image****\nDelivery URL: ", tajMahal, "\n")
  print("****2. Upload an image****\nDelivery URL: ", statueOfLiberty, "\n")
  print("****2. Upload an image****\nDelivery URL: ", christTheRedeemer, "\n")
  print("****2. Upload an image****\nDelivery URL: ", sydneyOperaHouse, "\n")
  print("****2. Upload an image****\nDelivery URL: ", pyramids, "\n")
  print("****2. Upload an image****\nDelivery URL: ", chichenItza, "\n")
  print("****2. Upload an image****\nDelivery URL: ", bigBen, "\n")

def getAssetInfo():

# Get and use details of the image
  # ==============================

    # Get image details and save it in the variable 'image_info'.
    image_info=cloudinary.api.resource("quickstart_butterfly")
    print("****3. Get and use details of the image****\nUpload response:\n", json.dumps(image_info,indent=2), "\n")

    # Assign tags to the uploaded image based on its width. Save the response to the update in the variable 'update_resp'.
    if image_info["width"]>900:
        update_resp=cloudinary.api.update("quickstart_butterfly", tags = "large")
    elif image_info["width"]>500:
        update_resp=cloudinary.api.update("quickstart_butterfly", tags = "medium")
    else:
        update_resp=cloudinary.api.update("quickstart_butterfly", tags = "small")

    # Log the new tag to the console.
    print("New tag: ", update_resp["tags"], "\n")

def createTransformation():

  # Transform the image
  # ==============================

  transformedURL = CloudinaryImage("quickstart_butterfly").build_url(width = 100, height = 150, crop = "fill")

  # Log the URL to the console
  print("****4. Transform the image****\nTransfrmation URL: ", transformedURL, "\n")

  # Use this code instead if you want to create a complete HTML image element:
  # imageTag = cloudinary.CloudinaryImage("quickstart_butterfly").image(radius="max", effect="sepia")
  # print("****4. Transform the image****\nTransfrmation URL: ", imageTag, "\n")

def main():
  uploadImage()
  getAssetInfo()
  createTransformation()
main();