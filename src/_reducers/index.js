import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { events } from "./events.reducer";
import { eventMode } from "./eventsMode.reducer";
import { eventObjective } from "./eventsObjective.reducer";
import { alert } from "./alert.reducer";
import { adduser } from "./adduser.reducer";
import { soldtomanagment } from "./soldtomanagment.reducer";
import { productmasterlist } from "./getproductmasterlist.reducer";
import { productgroupmasterlist } from "./getproductgrouplist.reducer";
import { addproductgroup } from "./addproductgroup.reducer";
import { productgroupsearch } from "./productgroupsearch.reducer";
import { productmasterdetail } from "./productmasterdetail.reducer";
import { geographymasterupload } from "./geographymasterupload.reducer";
import { inssedesupdate } from "./inssedesupdate.reducer";
import { productmastersearch } from "./productmastersearch.reducer";
import { contacttoggle } from "./contacttoggle.reducer";
import { accountcontactlist } from "./accountcontactlist.reducer";
import { productgroupdetaillist } from "./productgroupdetaillist.reducer";
import { productimageupload } from "./productimageupload.reducer";
import { getdivision } from "./getdivision.reducer";
import { adddivision } from "./adddivision.reducer";
import { deletedivisionmaster } from "./deletedivisionmaster.reducer";
import { updatedivisionmaster } from "./updatedivisionmaster.reducer";
import { loginPage, isLoggedIn } from "./login.reducer";
import { businesssegment } from "./businesssegment.reducer";
import { distributionchannel } from "./distributionchannel.reducer";
import { adddistributionchannel } from "./adddistributionchannel.reducer";
import { shippingcondition } from "./shippingcondition.reducer";
import { addshippingcondition } from "./addshippingcondition.reducer";
import { specialprocessing } from "./specialprocessing.reducer";
import { addspecialprocessing } from "./addspecialprocessing.reducer";
import { transportorzone } from "./transportorzone.reducer";
import { addtransportorzone } from "./addtransportorzone.reducer";
import { shippingtype } from "./shippingtype.reducer";
import { addshippingtype } from "./addshippingtype.reducer";
import { casestatus } from "./casestatus.reducer";
import { checkboxtoggle } from "./checkboxtoggle.reducer";
import { addcasestatus } from "./addcasestatus.reducer";
import { updatecasestatusmaster } from "./updatecasestatusmaster.reducer";
import { deletecasestatusmaster } from "./deletecasestatusmaster.reducer";
import { casetype } from "./casetype.reducer";
import { addcasetype } from "./addcasetype.reducer";
import { updatecasetypemaster } from "./updatecasetypemaster.reducer";
import { deletecasetypemaster } from "./deletecasetypemaster.reducer";
import { assignproduct } from "./assignproduct.reducer";
import { contactstatus } from "./contactstatus.reducer";
import { productgroupstatus } from "./productgroupstatus.reducer";
import { activeproduct } from "./activeproduct.reducer";
import { updateproductgroup } from "./updateproductgroup.reducer";
import { productselectid } from "./productselectid.reducer";
import { productmasterid } from "./productmasterid.reducer";
import { unitmaster } from "./unitmaster.reducer";
import { addunitmaster } from "./addunitmaster.reducer";
import { pricetypemaster } from "./pricetypemaster.reducer";
import { retailerpaymentmaster } from "./retailerpaymentmaster.reducer";
import { packagetype } from "./packagetype.reducer";
import { projecttypemaster } from "./projecttypemaster.reducer";
import { marketintelligencemaster } from "./marketintelligencemaster.reducer";
import { deliverymodemaster } from "./deliverymodemaster.reducer";
import { salesdistrictmaster } from "./salesdistrictmaster.reducer";
import { preferredtrucktypesmaster } from "./preferredtrucktypesmaster.reducer";
import { salesorganizationmaster } from "./salesorganization.reducer";
import { specialproject } from "./specialproject.reducer";
import { areatypemaster } from "./areatypemaster.reducer";
import { strategytypemaster } from "./strategytypemaster.reducer";
import { competitorproductmaster } from "./competitorproductmaster.reducer";
import { ordertypemaster } from "./ordertypemaster.reducer";
import { producttypemaster } from "./producttypemaster.reducer";
import { transportermaster } from "./transportermaster.reducer";
import { soldtomanagmentitemid } from "./soldtomanagmentitemid.reducer";
import { updatesoldtomanagment } from "./updatesoldtomanagment.reducer";
import { getrolelist } from "./getrolelist.reducer";
import { regionlist } from "./regionlist.reducer";
import { provincelist } from "./provincelist.reducer";
import { districtlist } from "./districtlist.reducer";
import { regionselect } from "./regionselect.reducer";
import { provinceselect } from "./provinceselect.reducer";
import { segmentlist } from "./segmentlist.reducer";
import { getalluser } from "./getalluser.reducer";
import { subdistrictlist } from "./subdistrictlist.reducer";
import { districtselect } from "./districtselect.reducer";
import { subdistrictselect } from "./subdistrictselect.reducer";
import { assignproductgroupidlist } from "./assignproductgroupidlist.reducer";
import { geographymasterlist } from "./geographymasterlist.reducer";
import { productimagegetlist } from "./productimagegetlist.reducer";
import { soldtomanagmentsearch } from "./soldtomanagmentsearch.reducer";
import { accountformdata } from "./accountformdata.reducer";
import { productactiveassignlist } from "./productactiveassignlist.reducer";
import { productmasteractiveinactive } from "./productmasteractiveinactive.reducer";
import { activeproductmaster } from "./activeproductmaster.reducer";
import { soldtoproductgrouplist } from "./soldtoproductgrouplist.reducer";
import { getcustomergroup } from "./getcustomergroup.reducer";
import { addcustomergroup } from "./addcustomergroup.reducer";
import { truckmasterlist } from "./truckmasterlist.reducer";
import { shiptolist } from "./shiptolist.reducer";
import { soldtocontractlist } from "./soldtocontractlist.reducer";
import { contractdetaillist } from "./contractdetaillist.reducer";
import { inseeprivilagelist } from "./inseeprivilagelist.reducer";
import { addrole } from "./addrole.reducer";
import { getallrolelist } from "./getallrolelist.reducer";
import { getownership } from "./getownership.reducer";
import { vechilestatuslist } from "./vechilestatuslist.reducer";
import { vechiletypelist } from "./vechiletypelist.reducer";
import { addtruckmaster } from "./addtruckmaster.reducer";
import { guidelinematrix } from "./guidelinematrix.reducer";
import { activetruckmaster } from "./activetruckmaster.reducer";
import { updatetruckmaster } from "./updatetruckmaster.reducer";
import { uploadguidelinematrix } from "./uploadguidelinematrix.reducer";
import { uploadretailer } from "./uploadretailer.reducer";
import { uploadinseeprivilage } from "./uploadinseeprivilage.reducer";
import { uploadcustomertier } from "./uploadcustomertier.reducer";
import { getstrategy } from "./getstrategy.reducer";
import { addstrategymatrix } from "./addstrategymatrix.reducer";
import { internalmanagmentfilter } from "./internalmanagmentfilter.reducer";
import { roleselect } from "./roleselect.reducer";
import { internalmanagmentsearch } from "./internalmanagmentsearch.reducer";
import { customeruserid } from "./customeruserid.reducer";
import { customertierlist } from "./customertierlist.reducer";
import { retailerlist } from "./retailerlist.reducer";
import { loyaltycustomerlist } from "./loyaltycustomerlist.reducer";
import { loyaltypointform } from "./loyaltypointform.reducer";
import { getloyaltypointlist } from "./getloyaltypointlist.reducer";
import { productclassificationlist } from "./productclassificationlist.reducer";
import { addproductclassification } from "./addproductclassification.reducer";
import { productgroupeditlist } from "./productgroupeditlist.reducer";
import { deleteassignproduct } from "./deleteassignproduct.reducer";
import { deletesoldtoproductgroup } from "./deletesoldtoproductgroup.reducer";
import { modifiedproductgroup } from "./modifiedproductgroup.reducer";
import { vechicleidlist } from "./vechicleidlist.reducer";
import { getchanneltype } from "./getchanneltype.reducer";
import { getapptype } from "./getapptype.reducer";
import { addbannerimage } from "./addbannerimage.reducer";
import { getbannerimagelist } from "./getbannerimagelist.reducer";
import { searchretailer } from "./searchretailer.reducer";
import { deleteproductmasterdelete } from "./deleteproductmasterdelete.reducer";
import { addconwoodmaster } from "./addconwoodmaster.reducer";
import { dropdownparent } from "./dropdownparent.reducer";
import { getconwoodcategory } from "./getconwoodcategory.reducer";
import { deletecategorylist } from "./deletecategorylist.reducer";
import { editconwoodlist } from "./editconwoodlist.reducer";
import { uploadproductgroup } from "./uploadproductgroup.reducer";
import { uploadsoldto } from "./uploadsoldto.reducer";
import { updatecontactlist } from "./updatecontactlist.reducer";
import { downloadsoldto } from "./downloadsoldto.reducer";
import { deletebannerlist } from "./deletebannerlist.reducer";
import { editbannerlist } from "./editbannerlist.reducer";
import { subDealerData } from "./getSubDealer.reducer";
// import { retailerSubdealers } from './retailersubdealers.reducer'
import { getDashboardImage } from "./getDashboardImage.reducer";
import { downloadproductgroup } from "./downloadproductgroup.reducer";
import { uploadContact } from "./uploadContact.reducer";
import { downloadinsee } from "./downloadinsee.reducer";
import { downloadcustomertier } from "./downloadcustomertier.reducer";
import { shiptosearch } from "./shiptosearch.reducer";
import { contractListBySearchValue } from "./contractListBySearchValue.reducer";
import { truckmastersearch } from "./truckmastersearch.reducer";
import { subdealersearch } from "./subdealersearch.reducer";
import { SearchedContactList } from "./searchedContactList.reducer";
import { DownloadContactDetails } from "./downloadContactDetails.reducer";
import { caseoriginmaster } from "./caseoriginmaster.reducer";
import { categorymaster } from "./categorymaster.reducer";
import { addcategorymaster } from "./addcategorymaster.reducer";
import { constructionphasemaster } from "./constructionphasemaster.reducer";
import { updatecategorymaster } from "./updatecategorymaster.reducer";
import { deletecategorymaster } from "./deletecategorymaster.reducer";
import { actionstatusmaster } from "./actionstatusmaster.reducer";
import { actioncategorymaster } from "./actioncategorymaster.reducer";
import { departmentmaster } from "./departmentmaster.reducer";
import { functionalrolemaster } from "./functionalrolemaster.reducer";
import { leadsourcemaster } from "./leadsourcemaster.reducer";
import { leadstagemaster } from "./leadstagemaster.reducer";
import { userrolemaster } from "./userrolemaster.reducer";
import { trucktypemaster } from "./trucktypemaster.reducer";
import { promotiontypemaster } from "./promotiontypemaster.reducer";
import { pricebookmaster } from "./pricebookmaster.reducer";
import { productproducemaster } from "./productproducemaster.reducer";
import { distributionareamaster } from "./distributionareamaster.reducer";
import { subcategorymaster } from "./subcategorymaster.reducer";
import { addsubcategorymaster } from "./addsubcategorymaster.reducer";
import { updatesubcategorymaster } from "./updatesubcategorymaster.reducer";
import { deletesubcategorymaster } from "./deletesubcategorymaster.reducer";
import { descriptionmaster } from "./descriptionmaster.reducer";
import { adddescriptionmaster } from "./adddescriptionmaster.reducer";
import { updatedescriptionmaster } from "./updatedescriptionmaster.reducer";
import { deletedescriptionmaster } from "./deletedescriptionmaster.reducer";
import { addactioncategorymaster } from "./addactioncategorymaster.reducer";
import { addactionstatusmaster } from "./addactionstatusmaster.reducer";
import { addareatypemaster } from "./addareatypemaster.reducer";
import { addcompatitorproductmaster } from "./addcompatitorproductmaster.reducer";
import { addconstructionphasemaster } from "./addconstructionphasemaster.reducer";
import { adddeliverymodemaster } from "./adddeliverymodemaster.reducer";
import { adddepartmentmaster } from "./adddepartmentmaster.reducer";
import { adddistributionareamaster } from "./adddistributionareamaster.reducer";
import { addfunctionalrolemaster } from "./addfunctionalrolemaster.reducer";
import { addleadsourcemaster } from "./addleadsourcemaster.reducer";
import { addleadstagemaster } from "./addleadstagemaster.reducer";
import { addmarketintelligencemaster } from "./addmarketintelligencemaster.reducer";
import { addpackagetypemaster } from "./addpackagetypemaster.reducer";
import { addpreferredtrucktypesmaster } from "./addpreferredtrucktypesmaster.reducer";
import { addpricetypemaster } from "./addpricetypemaster.reducer";
import { addpricebookmaster } from "./addpricebookmaster.reducer";
import { addproductproducemaster } from "./addproductproducemaster.reducer";
import { addproducttypemaster } from "./addproducttypemaster";
import { addprojecttypemaster } from "./addprojecttypemaster.reducer";
import { addpromotiontypemaster } from "./addpromotiontypemaster.reducer";
import { addretailerpaymenttermmaster } from "./addretailerpaymenttermmaster.reducer";
import { addsalesdistrictmaster } from "./addsalesdistrictmaster.reducer";
import { addsalesorganizationmaster } from "./addsalesorganizationmaster.reducer";
import { addspecialprojectmaster } from "./addspecialprocessingmaster.reducer";
import { addstrategytypemaster } from "./addstrategytypemaster.reducer";
import { addtransportermaster } from "./addtransportermaster.reducer";
import { addtrucktypemaster } from "./addtrucktypemaster.reducer";
import { adduserrolemaster } from "./adduserrolemaster.reducer";
import { deleteproductgrouplist } from "./deleteproductgrouplist.reducer";
import { updatecustomertier } from "./updatecustomertier.reducer";
import { getautocustomertier } from "./getautocustomertier.reducer";
import { updateinseeprivilege } from "./updateinseeprivilege.reducer";
import { getautoinseeprivilege } from "./getautoinseeprivilege.reducer";
import { deletecontactlist } from "./deletecontactlist.reducer";
import { retailerdetaillist } from "./retailerdetaillist.reducer";
import { retailerautolist } from "./retailerautolist.reducer";
import { updateretailerlist } from "./updateretailerlist.reducer";
import { downloadretailerexcel } from "./downloadretailerexcel.reducer";
import { filterproductmaster } from "./filterproductmaster.reducer";
import { downloadretailersubdealer } from "./downloadretailersubdealer.reducer";
import { resendlogincredential } from "./resendlogincredential.reducer";
import { assignproductitemid } from "./assignproductitemid.reducer";
import { assignproductadddate } from "./assignproductadddate.reducer";
import { assignproductupdatedate } from "./assignproductupdatedate.reducer";
import { getassignbyid } from "./getassignbyid.reducer";
import { assignsoldtoproductupdatedate } from "./assignsoldtoproductupdatedate.reducer";
import { getassignsoldtobyid } from "./getassignsoldtobyid.reducer";
import { addproductdateundersoldto } from "./addproductdateundersoldto.reducer";
import { soldtoassignproduct } from "./soldtoassignproduct.reducer";
import { updateproductdateundersoldto } from "./updateproductdateundersoldto.reducer";
import { getassignproductlistforsoldto } from "./getassignproductlistforsoldto.reducer";
import { deleteproductdateinsoldto } from "./deleteproductdateinsoldto.reducer";
import { assignbyproductinsoldto } from "./assignbyproductinsoldto.reducer";
import { uploadretailersubdealerexcel } from "./uploadretailersubdealerexcel.reducer";
import { uploadinseevolume } from "./uploadinseevolume.reducer";
import { uploadleadinseevolume } from "./uploadleadinseevolume.reducer";
import { uploadforcastinseevolume } from "./uploadforcastinseevolume.reducer";
import { conwoodautofillcategory } from "./conwoodautofillcategory.reducer";
import { gettotalinseevolumelist } from "./gettotalinseevolumelist.reducer";
import { updateconwoodcategory } from "./updateconwoodcategory.reducer";
import { soldtoallemail } from "./soldtoallemail.reducer";
import { inseevolumetemplate } from "./inseevolumetemplate.reducer";
import { downloadcustomergroupsoldto } from "./downloadcustomergroupsoldto.reducer";
import { updatetotalinseevolume } from "./updatetotalinseevolume.reducer";
import { uploadcustomergroupcode } from "./uploadcustomergroupcode.reducer";
import { soldtodropdowncountry } from "./soldtodropdowncountry.reducer";
import { sendsmsfromsoldto } from "./sendsmsfromsoldto.reducer";
import { soldtopdpaforcustomer } from "./soldtopdpaforcustomer.reducer";
import { updateactioncategory } from "./updateactioncategory.reducer";
import { deleteactioncategory } from "./deleteactioncategory.reducer";
import { updateactionstatus } from "./updateactionstatus.reducer";
import { deleteactionstatus } from "./deleteactionstatus.reducer";
import { updateareatype } from "./updateareatype.reducer";
import { deleteareatype } from "./deleteareatype.reducer";
import { addcaseorigin } from "./addcaseorigin.reducer";
import { updatecaseorigin } from "./updatecaseorigin.reducer";
import { deletecaseorigin } from "./deletecaseorigin.reducer";
import { competitorproduct } from "./competitorproduct.reducer";
import { deletecompetitorproduct } from "./deletecompetitorproduct.reducer";
import { deleteconstructionphase } from "./deleteconstructionphase.reducer";
import { updateconstructionphase } from "./updateconstructionphase.reducer";
import { updatedeliverymode } from "./updatedeliverymode.reducer";
import { deletedeliverymode } from "./deletedeliverymode.reducer";
import { soldtoselectwithdivision } from "./soldtoselectwithdivision.reducer";
import { prefferedtruckdelivery } from "./prefferedtruckdelivery.reducer";
import { addprefferedtruckdelivery } from "./addprefferedtruckdelivery.reducer";
import { uploadprefferdtruckdelivery } from "./uploadprefferdtruckdelivery.reducer";
import { deleteprefferedtruckdelivery } from "./deleteprefferedtruckdelivery.reducer";
import { choosetransportorzone } from "./choosetransportorzone.reducer";
import { addchoosetransportorzone } from "./addchoosetransportorzone.reducer";
import { uploadchoosetransportor } from "./uploadchoosetransportor.reducer";
import { deletechoosetransportor } from "./deletechoosetransportor.reducer";
import { updateprefferedtruckdelivery } from "./updateprefferedtruckdelivery.reducer";
import { updatechoosetransportorzone } from "./updatechoosetransportorzone.reducer";
import { uploadloyalitycalcrules } from "./uploadloyalitycalcrules.reducer";
import { uploadloyalitycutoffrules } from "./uploadloyalitycutoffrules.reducer";
import { uploadadjustloyalityadmin } from "./uploadadjustloyalityadmin.reducer";
import { getloyalitycalcrules } from "./getloyalitycalcrules.reducer";
import { getloyalitycutoffrules } from "./getloyalitycutoffrules.reducer";
import { getadjustloyalityadmin } from "./getadjustloyalityadmin.reducer";
import { deletespecialProjectdelivery } from "./deletespecialProjectdelivery.reducer";
import { uploadspecialprojectdelivery } from "./uploadspecialprojectdelivery.reducer";
import { updatespecialprojectdelivery } from "./updatespecialprojectdelivery.reducer";
import { deleteloyalitycalcrules } from "./deleteloyalitycalcrules.reducer";
import { deleteloyalitycutoffrules } from "./deleteloyalitycutoffrules.reducer";
import { deleteadjectloyalityadmin } from "./deleteadjectloyalityadmin.reducer";
import { shiptoselectid } from "./shiptoselectid.reducer";
import { productassignlistsearch } from "./productassignlistsearch.reducer";
import { deleteusermanagment } from "./deleteusermanagement.reducer";
import { updateusermanagment } from "./updateusermanagment.reducer";
import { selectcustomeruserid } from "./selectcustomeruserid.reducer";
import { statususermanagmenttype } from "./statususermanagmenttype.reducer";
import { filterDropdown } from "./filterdropdown.reducer";
import { retailermakeinseeplus } from "./retailermakeinseeplus.reducer";
import { retailercontactlist } from "./retailercontactlist.reducer";
import { uploadretailercontact } from "./uploadretailercontact.reducer";
import { retaileruserid } from "./retaileruserid.reducer";
import { loyalitycompanytypelist } from "./loyalitycompanytypelist.reducer";
import { updateloyaltypointform } from "./updateloyaltypointform.reducer";
import { updateloyaltycutoff } from "./updateloyaltycutoff.reducer";
import { loyaltycategorymaster } from "./loyaltycategorymaster.reducer";
import { addadjustloyalityadmin } from "./addAdjustLoyalityAdmin.reducer";
import { updateAdjustLoyalityAdmin } from "./updateAdjustLoyalityAdmin.reducer";
import { getredemlist } from "./getredemlist.reducer";
import { getearnpointlist } from "./getearnpointlist.reducer";
import { materialgrouplist } from "./materialgrouplist.reducer";
import { dealercustomername } from "./dealercustomername.reducer";
import { uploadContactvnandlk } from "./uploadContactvnandlk.reducer";
import { contactvnlkLink } from "./contactvnlklink.reducer";
import { deleteproductimage } from "./deleteproductimage.reducer";
import { allholidaymasterlist } from "./allholidaymasterlist.reducer";
import { addholidaymaster } from "./addholidaymaster.reducer";
import { updateholidaymaster } from "./updateholidaymaster.reducer";
import { deleteholidaymaster } from "./deleteholidaymaster.reducer";
import { uploadholidaymaster } from "./uploadholidaymaster.reducer";
import { weekendholidaylist } from "./weekendholidaylist.reducer";
import { uploadweekendmaster } from "./uploadweekendmaster.reducer";
import { deletesubdealersoldto } from "./deletesubdealersoldto.reducer";
import { updatesubdealersoldto } from "./updatesubdealersoldto.reducer";
import { volumeallocationlist } from "./volumeallocationlist.reducer";
import { deletevolumeallocation } from "./deletevolumeallocation.reducer";
import { createretailersubdealer } from "./createretailersubdealer.reducer";
import { salesrepidlist } from "./salesrepidlist.reducer";
import { salesdistrictlist } from "./salesdistrictlist.reducer";
import { updatevolumecuttoffdate } from "./updatevolumecuttoffdate.reducer";
import { retailerautofield } from "./retailerautofield.reducer";
import { retailerallcontactlist } from "./retailerallcontactlist.reducer";
import { retaileraccountformdata } from "./retaileraccountformdata.reducer";
import { updateretailersoldto } from "./updateretailersoldto.reducer";
import { deleteretailersoldto } from "./deleteretailersoldto.reducer";
import { updateretailercontactlist } from "./updateretailercontactlist.reducer";
import { deleteretailercontactlist } from "./deleteretailercontactlist.reducer";
import { autoretailercontact } from "./autoretailercontact.reducer";
import { existingcustomerlist } from "./existingcustomerlist.reducer";
import { uploadexistingcustomer } from "./uploadexistingcustomer.reducer";
import { deleteexistingcustomer } from "./deleteexistingcustomer.reducer";
import { updateexistingcustomer } from "./updateexistingcustomer.reducer";
import { noncustomerinactive } from "./noncustomerinactive.reducer";
import { uploadcustomerinactive } from "./uploadcustomerinactive.reducer";
import { deletecustomerinactive } from "./deletecustomerinactive.reducer";
import { updatecustomerinactive } from "./updatecustomerinactive.reducer";
import { activitytarget } from "./activitytarget.reducer";
import { uploadactivitytarget } from "./uploadactivitytarget.reducer";
import { updateactivitytarget } from "./updateactivitytarget.reducer";
import { beatlist } from "./beatlist.reducer";
import { uploadbeatList } from "./uploadbeatList.reducer";
import { relationwithcustomer } from "./relationwithcustomer.reducer";
import { uploadrelationcustomerlist } from "./uploadrelationcustomerlist.reducer";
import { deleteactivitytarget } from "./deleteactivitytarget.reducer";
import { deletebeatmaster } from "./deletebeatmaster.reducer";
import { deletecustomerrelation } from "./deletecustomerrelation.reduce";
import { downloadexistingcustomer } from "./downloadexistingcustomer.reducer";
import { downloadnoninactivecustomer } from "./downloadnoninactivecustomer.reducer";
import { downloadactivtytarget } from "./downloadactivtytarget.reducer";
import { downloadbeatmaster } from "./downloadbeatmaster.reducer";
import { beatmastersearch } from "./beatmastersearch.reducer";
import { updatebeatmaster } from "./updatebeatmaster.reducer";
import { downloadrelationwith } from "./downloadrelationwith.reducer";
import { updaterelationcustomer } from "./updaterelationcustomer.reducer";
import { relationsearch } from "./relationsearch.reducer";
import { DownloadContact } from "./downloadContact.reducer";
import { addretailersoldto } from "./addretailersoldto.reducer";
import { retailerloyaltylist } from "./retailerloyaltylist.reducer";
import { updateretailerloyaltypoint } from "./updateretailerloyaltypoint.reducer";
import { retailerloyaltysearch } from "./retailerloyaltysearch.reducer";
import { deleteretailerloyalty } from "./deleteretailerloyalty.reducer";
import { addsoldtosubdealer } from "./addsoldtosubdealer.reducer";
import { retailervnlkcontactexcel } from "./retailervnlkcontactexcel.reducer";
import { retailersubdealers } from "./retailersubdealers.reducer";
import { autosubdealerlist } from "./autosubdealerlist.reducer";
import { dealeractivityPoint } from "./dealeractivityPoint.reducer";
import { volumeallocationloyalty } from "./volumeallocationloyalty.reducer";
import { subdealeractivitypoint } from "./subdealeractivitypoint.reducer";
import { adjustloyaltyreport } from "./adjustloyaltyreport.reducer";
import { adjustreportlist } from "./adjustreportlist.reducer";
import { volumeallocationloyaltyreport } from "./volumeallocationloyaltyreport.reducer";
import { dealeractivityloyaltyreport } from "./dealeractivityloyaltyreport.reducer";
import { subdealerloyaltyreport } from "./subdealerloyaltyreport.reducer";
import { billingyearlist } from "./billingyearlist.reducer";
import { downloaddealeractivity } from "./downloaddealeractivity.reducer";
import { downloadadjustloyalty } from "./downloadadjustloyalty.reducer";
import { downloadsubdealeractivity } from "./downloadsubdealeractivity.reducer";
import { downloadvolumeallocation } from "./downloadvolumeallocation.reducer";
import { addclasswithstyle } from "./addclasswithstyle.reducer";
import { fontsizechanger } from "./fontsizechanger.reducer";
import { inseeprivilagemonthyear } from "./inseeprivilagemonthyear.reducer";
import { adjustloyaltydeleteadmin } from "./adjustloyaltydeleteadmin.reducer";
import { selectmulticheckbox } from "./selectmulticheckbox.reducer";
import { downloadadjustloyaltyadmin } from "./downloadadjustloyaltyadmin.reducer";
import { adjustloyaltyadminfilter } from "./adjustloyaltyadminfilter.reducer";
import { allexpiredcalcrules } from "./allexpiredcalcrules.reducer";
import { retailerprovince } from "./retailerprovince.reducer";
import { retailerdistrict } from "./retailerdistrict.reducer";
import { retailersubdistrict } from "./retailersubdistrict.reducer";
import { salessoldtoarealist } from "./salessoldtoarealist.reducer";
import { subDealerContact } from "./getSubDealerContact.reducer";
import { subDealerLoyalty } from "./subDealerLoyalty.reducer";
import { dealerListWithRelationship } from "./dealerListWithRelationship.reducer";
import { SubDealerRelationUnderSoldTo } from "./getSubDealerRelationUnderSoldTo.reducer";
import { getSubDealerInfo } from "./getSubDealerInfo.reducer";
import { getLoyaltyPointsManualAdjust } from "./getLoyaltyPointsManualAdjust.reducer";
import { pointCalculation } from "./pointcalculation.reducer";
import { getSubdealerLoyaltyTransaction } from "./getSubdealerLoyaltyTransaction.reducer";
import { allocatioInventory } from "./allocationInventory.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  events,
  eventMode,
  eventObjective,
  alert,
  adduser,
  soldtomanagment,
  productmasterlist,
  productgroupmasterlist,
  addproductgroup,
  productgroupsearch,
  productmasterdetail,
  geographymasterupload,
  inssedesupdate,
  productmastersearch,
  contacttoggle,
  accountcontactlist,
  productgroupdetaillist,
  productimageupload,
  getdivision,
  adddivision,
  deletedivisionmaster,
  updatedivisionmaster,
  loginPage,
  isLoggedIn,
  businesssegment,
  distributionchannel,
  adddistributionchannel,
  shippingcondition,
  addshippingcondition,
  specialprocessing,
  addspecialprocessing,
  transportorzone,
  addtransportorzone,
  shippingtype,
  addshippingtype,
  casestatus,
  checkboxtoggle,
  addcasestatus,
  updatecasestatusmaster,
  deletecasestatusmaster,
  casetype,
  addcasetype,
  updatecasetypemaster,
  deletecasetypemaster,
  assignproduct,
  contactstatus,
  productgroupstatus,
  activeproduct,
  updateproductgroup,
  productselectid,
  productmasterid,
  unitmaster,
  addunitmaster,
  pricetypemaster,
  retailerpaymentmaster,
  packagetype,
  projecttypemaster,
  marketintelligencemaster,
  deliverymodemaster,
  salesdistrictmaster,
  preferredtrucktypesmaster,
  salesorganizationmaster,
  specialproject,
  areatypemaster,
  strategytypemaster,
  competitorproductmaster,
  ordertypemaster,
  producttypemaster,
  transportermaster,
  caseoriginmaster,
  categorymaster,
  updatecategorymaster,
  deletecategorymaster,
  addcategorymaster,
  constructionphasemaster,
  userrolemaster,
  trucktypemaster,
  promotiontypemaster,
  pricebookmaster,
  distributionareamaster,
  productproducemaster,
  subcategorymaster,
  addsubcategorymaster,
  updatesubcategorymaster,
  deletesubcategorymaster,
  descriptionmaster,
  adddescriptionmaster,
  updatedescriptionmaster,
  deletedescriptionmaster,
  actionstatusmaster,
  actioncategorymaster,
  departmentmaster,
  functionalrolemaster,
  leadsourcemaster,
  leadstagemaster,
  soldtomanagmentitemid,
  updatesoldtomanagment,
  getrolelist,
  regionlist,
  provincelist,
  districtlist,
  regionselect,
  provinceselect,
  segmentlist,
  // retailerSubdealers,
  getalluser,
  subdistrictlist,
  districtselect,
  subdistrictselect,
  assignproductgroupidlist,
  geographymasterlist,
  productimagegetlist,
  soldtomanagmentsearch,
  accountformdata,
  productactiveassignlist,
  productmasteractiveinactive,
  activeproductmaster,
  soldtoproductgrouplist,
  getcustomergroup,
  addcustomergroup,
  truckmasterlist,
  shiptolist,
  soldtocontractlist,
  contractdetaillist,
  inseeprivilagelist,
  addrole,
  getallrolelist,
  getownership,
  vechilestatuslist,
  vechiletypelist,
  addtruckmaster,
  guidelinematrix,
  activetruckmaster,
  updatetruckmaster,
  uploadguidelinematrix,
  uploadretailer,
  uploadinseeprivilage,
  uploadcustomertier,
  getstrategy,
  addstrategymatrix,
  internalmanagmentfilter,
  roleselect,
  internalmanagmentsearch,
  customeruserid,
  customertierlist,
  retailerlist,
  loyaltycustomerlist,
  loyaltypointform,
  getloyaltypointlist,
  productclassificationlist,
  addproductclassification,
  productgroupeditlist,
  deleteassignproduct,
  deletesoldtoproductgroup,
  modifiedproductgroup,
  vechicleidlist,
  getchanneltype,
  getapptype,
  addbannerimage,
  getbannerimagelist,
  searchretailer,
  deleteproductmasterdelete,
  addconwoodmaster,
  dropdownparent,
  getconwoodcategory,
  deletecategorylist,
  editconwoodlist,
  uploadproductgroup,
  uploadsoldto,
  updatecontactlist,
  downloadsoldto,
  deletebannerlist,
  editbannerlist,
  subDealerData,
  getDashboardImage,
  downloadproductgroup,
  uploadContact,
  downloadinsee,
  downloadcustomertier,
  shiptosearch,
  contractListBySearchValue,
  truckmastersearch,
  subdealersearch,
  SearchedContactList,
  DownloadContactDetails,
  addactioncategorymaster,
  addactionstatusmaster,
  addareatypemaster,
  addcompatitorproductmaster,
  addconstructionphasemaster,
  adddeliverymodemaster,
  adddepartmentmaster,
  adddistributionareamaster,
  addfunctionalrolemaster,
  addleadsourcemaster,
  addleadstagemaster,
  addmarketintelligencemaster,
  addpackagetypemaster,
  addpreferredtrucktypesmaster,
  addpricetypemaster,
  addpricebookmaster,
  addproductproducemaster,
  addproducttypemaster,
  addprojecttypemaster,
  addpromotiontypemaster,
  addretailerpaymenttermmaster,
  addsalesdistrictmaster,
  addsalesorganizationmaster,
  addspecialprojectmaster,
  addstrategytypemaster,
  addtransportermaster,
  addtrucktypemaster,
  adduserrolemaster,
  deleteproductgrouplist,
  updatecustomertier,
  getautocustomertier,
  updateinseeprivilege,
  getautoinseeprivilege,
  deletecontactlist,
  retailerdetaillist,
  retailerautolist,
  updateretailerlist,
  downloadretailerexcel,
  filterproductmaster,
  downloadretailersubdealer,
  resendlogincredential,
  assignproductitemid,
  assignproductadddate,
  assignproductupdatedate,
  getassignbyid,
  assignsoldtoproductupdatedate,
  getassignsoldtobyid,
  addproductdateundersoldto,
  soldtoassignproduct,
  updateproductdateundersoldto,
  getassignproductlistforsoldto,
  deleteproductdateinsoldto,
  assignbyproductinsoldto,
  uploadretailersubdealerexcel,
  uploadinseevolume,
  uploadleadinseevolume,
  uploadforcastinseevolume,
  conwoodautofillcategory,
  gettotalinseevolumelist,
  updateconwoodcategory,
  soldtoallemail,
  inseevolumetemplate,
  downloadcustomergroupsoldto,
  updatetotalinseevolume,
  uploadcustomergroupcode,
  soldtodropdowncountry,
  sendsmsfromsoldto,
  soldtopdpaforcustomer,
  updateactioncategory,
  deleteactioncategory,
  updateactionstatus,
  deleteactionstatus,
  updateareatype,
  deleteareatype,
  addcaseorigin,
  updatecaseorigin,
  deletecaseorigin,
  competitorproduct,
  deletecompetitorproduct,
  deleteconstructionphase,
  updateconstructionphase,
  updatedeliverymode,
  deletedeliverymode,
  soldtoselectwithdivision,
  prefferedtruckdelivery,
  addprefferedtruckdelivery,
  uploadprefferdtruckdelivery,
  deleteprefferedtruckdelivery,
  choosetransportorzone,
  addchoosetransportorzone,
  uploadchoosetransportor,
  deletechoosetransportor,
  updateprefferedtruckdelivery,
  updatechoosetransportorzone,
  uploadloyalitycalcrules,
  uploadloyalitycutoffrules,
  uploadadjustloyalityadmin,
  getloyalitycalcrules,
  getloyalitycutoffrules,
  getadjustloyalityadmin,
  deletespecialProjectdelivery,
  uploadspecialprojectdelivery,
  updatespecialprojectdelivery,
  deleteloyalitycalcrules,
  deleteloyalitycutoffrules,
  deleteadjectloyalityadmin,
  shiptoselectid,
  productassignlistsearch,
  deleteusermanagment,
  updateusermanagment,
  selectcustomeruserid,
  statususermanagmenttype,
  filterDropdown,
  retailermakeinseeplus,
  retailercontactlist,
  uploadretailercontact,
  retaileruserid,
  loyalitycompanytypelist,
  updateloyaltypointform,
  updateloyaltycutoff,
  loyaltycategorymaster,
  updateAdjustLoyalityAdmin,
  addadjustloyalityadmin,
  getredemlist,
  getearnpointlist,
  materialgrouplist,
  dealercustomername,
  uploadContactvnandlk,
  contactvnlkLink,
  deleteproductimage,
  allholidaymasterlist,
  addholidaymaster,
  updateholidaymaster,
  deleteholidaymaster,
  uploadholidaymaster,
  weekendholidaylist,
  uploadweekendmaster,
  deletesubdealersoldto,
  updatesubdealersoldto,
  volumeallocationlist,
  deletevolumeallocation,
  createretailersubdealer,
  salesrepidlist,
  salesdistrictlist,
  updatevolumecuttoffdate,
  retailerautofield,
  retailerallcontactlist,
  retaileraccountformdata,
  updateretailersoldto,
  deleteretailersoldto,
  updateretailercontactlist,
  deleteretailercontactlist,
  autoretailercontact,
  existingcustomerlist,
  uploadexistingcustomer,
  deleteexistingcustomer,
  updateexistingcustomer,
  noncustomerinactive,
  uploadcustomerinactive,
  deletecustomerinactive,
  updatecustomerinactive,
  activitytarget,
  uploadactivitytarget,
  updateactivitytarget,
  beatlist,
  uploadbeatList,
  relationwithcustomer,
  uploadrelationcustomerlist,
  deleteactivitytarget,
  deletebeatmaster,
  deletecustomerrelation,
  downloadexistingcustomer,
  downloadnoninactivecustomer,
  downloadactivtytarget,
  downloadbeatmaster,
  beatmastersearch,
  updatebeatmaster,
  downloadrelationwith,
  updaterelationcustomer,
  relationsearch,
  DownloadContact,
  addretailersoldto,
  retailerloyaltylist,
  updateretailerloyaltypoint,
  retailerloyaltysearch,
  deleteretailerloyalty,
  addsoldtosubdealer,
  retailervnlkcontactexcel,
  retailersubdealers,
  autosubdealerlist,
  dealeractivityPoint,
  volumeallocationloyalty,
  subdealeractivitypoint,
  adjustloyaltyreport,
  adjustreportlist,
  volumeallocationloyaltyreport,
  dealeractivityloyaltyreport,
  subdealerloyaltyreport,
  billingyearlist,
  downloaddealeractivity,
  downloadadjustloyalty,
  downloadsubdealeractivity,
  downloadvolumeallocation,
  addclasswithstyle,
  fontsizechanger,
  inseeprivilagemonthyear,
  adjustloyaltydeleteadmin,
  selectmulticheckbox,
  downloadadjustloyaltyadmin,
  adjustloyaltyadminfilter,
  allexpiredcalcrules,
  retailerprovince,
  retailerdistrict,
  retailersubdistrict,
  salessoldtoarealist,
  subDealerLoyalty,
  subDealerContact,
  dealerListWithRelationship,
  SubDealerRelationUnderSoldTo,
  getSubDealerInfo,
  getLoyaltyPointsManualAdjust,
  pointCalculation,
  getSubdealerLoyaltyTransaction,
  allocatioInventory
});

export default rootReducer;
