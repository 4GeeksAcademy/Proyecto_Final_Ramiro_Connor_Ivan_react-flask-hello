
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
  cloudinary.uploader.upload("https://flagsapi.com/MX/flat/64.png", public_id="mexico_flag_fixed", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/PE/flat/64.png", public_id="peru_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/GB/flat/64.png", public_id="united_kingdom_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/US/flat/64.png", public_id="united_states_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/VE/flat/64.png", public_id="venezuela_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/JO/flat/64.png", public_id="jordan_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/ES/flat/64.png", public_id="spain_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/JP/flat/64.png", public_id="japan_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/TR/flat/64.png", public_id="turkey_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/CA/flat/64.png", public_id="canada_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/DE/flat/64.png", public_id="germany_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/KR/flat/64.png", public_id="south_korea_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/ID/flat/64.png", public_id="indonesia_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/JM/flat/64.png", public_id="jamaica_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/PK/flat/64.png", public_id="pakistan_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/SN/flat/64.png", public_id="senegal_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/TH/flat/64.png", public_id="thailand_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/UY/flat/64.png", public_id="uruguay_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/UA/flat/64.png", public_id="ukraine_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://flagsapi.com/ZA/flat/64.png", public_id="south_africa_flag", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/2760519/pexels-photo-2760519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="colisseum2", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/13107068/pexels-photo-13107068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="obelisco", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/2928058/pexels-photo-2928058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="trevi_fountain", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/7263897/pexels-photo-7263897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="taj_mahal2", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="statue_of_liberty", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/2818895/pexels-photo-2818895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="christ_the_redeemer", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="sydney_opera_house", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/3185480/pexels-photo-3185480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="pyramids2", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/17041173/pexels-photo-17041173/free-photo-of-mayan-ruins-chichen-itza-in-mexico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="chichen_itza2", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/14674675/pexels-photo-14674675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="big_ben2", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="san_fran_bridge", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/4388165/pexels-photo-4388165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="petra", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/248218/pexels-photo-248218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="stonehenge", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/2130610/pexels-photo-2130610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="louvre2", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="sagrada_familia", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/7692223/pexels-photo-7692223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="forbidden_city", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="mount_fuji", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="eiffel_tower", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/4388287/pexels-photo-4388287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="leaning_pisa", unique_filename = False, overwrite=True)
  cloudinary.uploader.upload("https://images.pexels.com/photos/19394891/pexels-photo-19394891/free-photo-of-aerial-view-of-the-blue-mosque-istanbul-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", public_id="blue_mosque", unique_filename = False, overwrite=True)

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
  flagMexico = CloudinaryImage("mexico_flag_fixed").build_url()
  flagPeru = CloudinaryImage("peru_flag").build_url()
  flagUK = CloudinaryImage("united_kingdom_flag").build_url()
  flagUSA = CloudinaryImage("united_states_flag").build_url()
  flagVenezuela = CloudinaryImage("venezuela_flag").build_url()
  flagJordan = CloudinaryImage("jordan_flag").build_url()
  flagSpain = CloudinaryImage("spain_flag").build_url()
  flagJapan = CloudinaryImage("japan_flag").build_url()
  flagTurkey = CloudinaryImage("turkey_flag").build_url()
  flagCanada = CloudinaryImage("canada_flag").build_url()
  flagGermany = CloudinaryImage("germany_flag").build_url()
  flagSouthKorea = CloudinaryImage("south_korea_flag").build_url()
  flagIndonesia = CloudinaryImage("indonesia_flag").build_url()
  flagJamaica = CloudinaryImage("jamaica_flag").build_url()
  flagPakistan = CloudinaryImage("pakistan_flag").build_url()
  flagSenegal = CloudinaryImage("senegal_flag").build_url()
  flagThailand = CloudinaryImage("thailand_flag").build_url()
  flagUruguay = CloudinaryImage("uruguay_flag").build_url()
  flagUkraine = CloudinaryImage("ukraine_flag").build_url()
  flagSouthAfrica = CloudinaryImage("south_africa_flag").build_url()
  colisseum = CloudinaryImage("colisseum2").build_url()
  obelisco = CloudinaryImage("obelisco").build_url()
  trevi = CloudinaryImage("trevi_fountain").build_url()
  tajMahal = CloudinaryImage("taj_mahal2").build_url()
  statueOfLiberty = CloudinaryImage("statue_of_liberty").build_url()
  christTheRedeemer = CloudinaryImage("christ_the_redeemer").build_url()
  sydneyOperaHouse = CloudinaryImage("sydney_opera_house").build_url()
  pyramids = CloudinaryImage("pyramids2").build_url()
  chichenItza = CloudinaryImage("chichen_itza2").build_url()
  bigBen = CloudinaryImage("big_ben2").build_url()
  sanFranciscoBridge = CloudinaryImage("san_fran_bridge").build_url()
  petra = CloudinaryImage("petra").build_url()
  stonehenge = CloudinaryImage("stonehenge").build_url()
  louvre = CloudinaryImage("louvre2").build_url()
  sagradaFamilia = CloudinaryImage("sagrada_familia").build_url()
  forbiddenCity = CloudinaryImage("forbidden_city").build_url()
  mountFuji = CloudinaryImage("mount_fuji").build_url()
  eiffelTower = CloudinaryImage("eiffel_tower").build_url()
  leaningPisa = CloudinaryImage("leaning_pisa").build_url()
  blueMosque = CloudinaryImage("blue_mosque").build_url()


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
  print("****2. Upload an image****\nDelivery URL: ", flagJordan, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagSpain, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagJapan, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagTurkey, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagCanada, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagGermany, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagSouthKorea, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagIndonesia, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagJamaica, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagPakistan, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagSenegal, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagThailand, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagUruguay, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagUkraine, "\n")
  print("****2. Upload an image****\nDelivery URL: ", flagSouthAfrica, "\n")
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
  print("****2. Upload an image****\nDelivery URL: ", sanFranciscoBridge, "\n")
  print("****2. Upload an image****\nDelivery URL: ", petra, "\n")
  print("****2. Upload an image****\nDelivery URL: ", stonehenge, "\n")
  print("****2. Upload an image****\nDelivery URL: ", louvre, "\n")
  print("****2. Upload an image****\nDelivery URL: ", sagradaFamilia, "\n")
  print("****2. Upload an image****\nDelivery URL: ", forbiddenCity, "\n")
  print("****2. Upload an image****\nDelivery URL: ", mountFuji, "\n")
  print("****2. Upload an image****\nDelivery URL: ", eiffelTower, "\n")
  print("****2. Upload an image****\nDelivery URL: ", leaningPisa, "\n")
  print("****2. Upload an image****\nDelivery URL: ", blueMosque, "\n")


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