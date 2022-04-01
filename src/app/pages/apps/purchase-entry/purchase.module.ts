import { ɵSafeHtml } from '@angular/core'
import { SafeHtml } from '@angular/platform-browser'
import moment from 'moment'
export class OrderModule {
    Id: number
    Updated: boolean = false;
    OrderNo: number;
    InvoiceNo: number;
    SourceId: number;
    AggregatorOrderId: string;
    UPOrderId: string;
    StoreId: number;
    CustomerId: number;
    CustomerAddressId: number;
    OrderStatusId: number;
    PreviousStatusId: number;
    BillAmount: number;
    PaidAmount: number;
    RefundAmount: number;
    Source: string;
    Tax1: number;
    Tax2: number;
    Tax3: number;
    BillStatusId: number;
    SplitTableId: number;
    DiscPercent: number;
    DiscAmount: number;
    IsAdvanceOrder: boolean = false;
    CustomerData: string;
    DiningTableId: number;
    WaiterId: number;
    OrderedDateTime: string;
    OrderedDate: string;
    DeliveryDateTime: string;
    BillDateTime: string;
    BillDate: string;
    Note: string;
    OrderStatusDetails: string;
    RiderStatusDetails: string;
    FoodReady: boolean = false;
    Closed: boolean = false;
    OrderJson: string;
    ItemJson: string;
    ChargeJson: string;
    Charges: number;
    OrderDiscount: number;
    OrderTaxDisc: number;
    OrderTotDisc: number;
    AllItemDisc: number;
    AllItemTaxDisc: number;
    AllItemTotalDisc: number;
    ModifiedDate: string;
    UserId: number;
    CompanyId: number;
    OrderType: number;
    AutoOrderId: number;
    CreatedDate: string;
    SuppliedById: number;
    OrderedById: number;
    OrderStatus: number;
    DispatchStatus: number;
    ReceiveStatus: number;
    CancelStatus: number;
    SpecialOrder: boolean = false;
    WipStatus: string;
    ProdStatus: string;
    DifferentPercent: number;
    constructor(ordertype) {
        this.Updated = false;
        this.OrderNo = 0;
        this.InvoiceNo = 0;
        this.SourceId = 0;
        this.AggregatorOrderId = '';
        this.UPOrderId = '';
        this.StoreId = 0;
        this.CustomerId = 0;
        this.CustomerAddressId = 0;
        this.OrderStatusId = 0;
        this.PreviousStatusId = 0;
        this.BillAmount = 0;
        this.PaidAmount = 0;
        this.RefundAmount = 0;
        this.Source = "";
        this.Tax1 = 0;
        this.Tax2 = 0;
        this.Tax3 = 0;
        this.BillStatusId = 0;
        this.SplitTableId = 0;
        this.DiscPercent = 0;
        this.DiscAmount = 0;
        this.IsAdvanceOrder = false;
        this.CustomerData = '';
        this.DiningTableId = 0;
        this.WaiterId = 0;
        this.OrderedDateTime = '';
        this.OrderedDate = '';
        this.DeliveryDateTime = '';
        this.BillDateTime = '';
        this.BillDate = '';
        this.Note = '';
        this.OrderStatusDetails = '';
        this.RiderStatusDetails = '';
        this.FoodReady = false;
        this.Closed = false;
        this.OrderJson = '';
        this.ItemJson = '';
        this.ChargeJson = '';
        this.Charges = 0;
        this.OrderDiscount = 0;
        this.OrderTaxDisc = 0;
        this.OrderTotDisc = 0;
        this.AllItemDisc = 0;
        this.AllItemTaxDisc = 0;
        this.AllItemTotalDisc = 0;
        this.ModifiedDate = '';
        this.UserId = 0;
        this.CompanyId = 0;
        this.OrderType = 0;
        this.AutoOrderId = 0;
        this.CreatedDate = '';
        this.SuppliedById = 0;
        this.OrderedById = 0;
        this.OrderStatus = 0;
        this.DispatchStatus = 0;
        this.ReceiveStatus = 0;
        this.CancelStatus = 0;
        this.SpecialOrder = false;
        this.WipStatus = '';
        this.ProdStatus = '';
        this.DifferentPercent = 0;
    }
}

export class OrderItemModule {
    Id: number
    Updated: boolean = false;
    DiscPercent: number;
    DiscAmount: number;
    ItemDiscount: number;
    TaxItemDiscount: number;
    OrderDiscount: number;
    TaxOrderDiscount: number;
    StatusId: number;
    KitchenUserId: number;
    KOTId: number;
    Note: string;
    Message: string;
    TotalAmount: number;
    Extra: number;
    CategoryId: number;
    OptionJson: string;
    ComplementryQty: number;
    OrderItemId: number;
    OrderId: number;
    ProductId: number;
    OrderQuantity: number;
    DispatchedQuantity: number;
    ReceivedQuantity: number;
    ReturnedQuantity: number;
    CancelledQuantity: number;
    ReceiveLaterQuantity: number;
    DispatchLaterQuantity: number;
    Price: number;
    TaxAmount: number;
    Tax1: number;
    Tax2: number
    Tax3: number;
    Tax4: number;
    Amount: number;
    CreatedDate: string;
    CreatedBy: number;
    BillId: number;
    PendingQty: number;
    CurrentStock: number;
    AutoOrderId: number;
    OrderLevel: number;
    StockUpdateId: number;
    OldStock: number;
    CompanyId: number;
    VarianceReasonStr: string
    VarianceReasonDesc: string;
    constructor(product, options, showname) {
        this.Id = 0;
        this.Updated = false;
        this.DiscPercent = 0;
        this.DiscAmount = 0;
        this.ItemDiscount = 0;
        this.TaxItemDiscount = 0;
        this.OrderDiscount = 0;
        this.TaxOrderDiscount = 0;
        this.StatusId = 0;
        this.KitchenUserId = 0;
        this.KOTId = 0;
        this.Note = '';
        this.Message = '';
        this.TotalAmount = 0;
        this.Extra = 0;
        this.CategoryId = 0;
        this.OptionJson = '';
        this.ComplementryQty = 0;
        this.OrderItemId = 0;
        this.OrderId = 0;
        this.ProductId = 0;
        this.OrderQuantity = 0;
        this.DispatchedQuantity = 0;
        this.ReceivedQuantity = 0;
        this.ReturnedQuantity = 0;
        this.CancelledQuantity = 0;
        this.ReceiveLaterQuantity = 0;
        this.DispatchLaterQuantity = 0;
        this.Price = 0;
        this.TaxAmount = 0;
        this.Tax1 = 0;
        this.Tax2 = 0;
        this.Tax3 = 0;
        this.Tax4 = 0;
        this.Amount = 0;
        this.CreatedDate = '';
        this.CreatedBy = 0;
        this.BillId = 0;
        this.PendingQty = 0;
        this.CurrentStock = 0;
        this.AutoOrderId = 0;
        this.OrderLevel = 0;
        this.StockUpdateId = 0;
        this.OldStock = 0;
        this.CompanyId = 0;
        this.VarianceReasonStr = '';
        this.VarianceReasonDesc = '';
    }

}
export class OrderItemDetailModule {
    OrderItemDetailId: number;
    Id: number;
    ActualProdId: number;
    BatchId: number;
    BillId: number;
    OrdProdType: number;
    StorageStoreId: number;
    ContatinerId: number;
    ContainerCount: number;
    Quantity: number;
    UnitPrice: number;
    Tax1: number;
    Tax2: number;
    Amount: number;
    TaxAmount: number;
    Date: string;
    DateTime: string;
    RelatedOrderId: string;
    CreatedDate: string;
    CreatedBy: number;
    DiscAmount: number;
    DiscPercent: number;
    DiscPerQty: number;
    AutoOrderId: number;
    CompanyId: number;
    VarianceReasonStr: string;
    VarianceReasonDesc: string
    constructor(product, options, showname) {
        this.OrderItemDetailId = 0;
        this.Id = 0;
        this.ActualProdId = 0;
        this.BatchId = 0;
        this.BillId = 0;
        this.OrdProdType = 0;
        this.StorageStoreId = 0;
        this.ContatinerId = 0;
        this.ContainerCount = 0;
        this.Quantity = 0;
        this.UnitPrice = 0;
        this.Tax1 = 0;
        this.Tax2 = 0;
        this.Amount = 0;
        this.TaxAmount = 0;
        this.Date = '';
        this.DateTime = '';
        this.RelatedOrderId = '';
        this.CreatedDate = '';
        this.CreatedBy = 0;
        this.DiscAmount = 0;
        this.DiscPercent = 0;
        this.DiscPerQty = 0;
        this.AutoOrderId = 0;
        this.CompanyId = 0;
        this.VarianceReasonStr = '';
        this.VarianceReasonDesc = '';
    }
}


export class CurrentItemModule {
    Id: number
    Updated: boolean = false;
    DiscPercent: number;
    DiscAmount: number;
    ItemDiscount: number;
    TaxItemDiscount: number;
    OrderDiscount: number;
    TaxOrderDiscount: number;
    StatusId: number;
    KitchenUserId: number;
    KOTId: number;
    Note: string;
    Message: string;
    TotalAmount: number;
    Extra: number;
    CategoryId: number;
    OptionJson: string;
    ComplementryQty: number;
    OrderItemId: number;
    OrderId: number;
    ProductId: number;
    OrderQuantity: number;
    DispatchedQuantity: number;
    ReceivedQuantity: number;
    ReturnedQuantity: number;
    CancelledQuantity: number;
    ReceiveLaterQuantity: number;
    DispatchLaterQuantity: number;
    Price: number;
    TaxAmount: number;
    Tax1: number;
    Tax2: number
    Tax3: number;
    Tax4: number;
    Amount: number;
    CreatedDate: string;
    CreatedBy: number;
    BillId: number;
    PendingQty: number;
    CurrentStock: number;
    AutoOrderId: number;
    OrderLevel: number;
    StockUpdateId: number;
    OldStock: number;
    CompanyId: number;
    VarianceReasonStr: string
    VarianceReasonDesc: string;
    constructor(product) { }
}


export class purchaselistmodule {
    OrderNo: number
    ProductName: string
    ProductQty: number
    ProductPrice: number
    ProductTax: number
    BillAmount: number
    PaidAmount: number
    VendorName: string
    VendorNumber: number
    VendorAddress: string
    ReceviedDate: ""
    constructor() {
        this.OrderNo = 0
        this.ProductName = ""
        this.ProductQty = 0
        this.ProductPrice = 0
        this.ProductTax = 0
        this.BillAmount = 0
        this.PaidAmount = 0
        this.VendorName = ""
        this.VendorNumber = 0
        this.VendorAddress = ""
        this.ReceviedDate = ""
    }
}
